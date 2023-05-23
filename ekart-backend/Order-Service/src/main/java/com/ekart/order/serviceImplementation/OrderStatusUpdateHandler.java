package com.ekart.order.serviceImplementation;

import java.util.List;
import java.util.UUID;
import java.util.function.Consumer;

import com.ekart.common.DTO.ProductCategories;
import com.ekart.order.controller.CartController;
import com.ekart.order.proxy.InventoryServiceProxy;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.transaction.annotation.Transactional;

import com.ekart.common.DTO.OrderRequestDTO;
import com.ekart.common.DTO.ProductCategories;
import com.ekart.common.events.OrderStatus;
import com.ekart.common.events.PaymentStatus;
import com.ekart.order.Repository.OrderRepository;
import com.ekart.order.config.OrderStatusPublisher;
import com.ekart.order.controller.CartController;
import com.ekart.order.entity.PurchaseOrder;
import com.ekart.order.proxy.InventoryServiceProxy;

@Configuration
public class OrderStatusUpdateHandler {

	@Autowired
	private OrderRepository orderRepository;

	@Autowired
	private OrderStatusPublisher publisher;
	@Autowired
	private CartController cartController;

	@Autowired
	private InventoryServiceProxy inventoryServiceProxy;


	@Transactional
	public void updateOrder(UUID id, Consumer<PurchaseOrder> consumer) {
		orderRepository.findById(id).ifPresent(consumer.andThen(this::updateOrder));
	}

	public void updateOrder(PurchaseOrder purchaseOrder) {
		System.out.println(".............." + purchaseOrder.getPaymentStatus());
		boolean ispaymentComplete = PaymentStatus.PAYMENT_COMPLETED.equals(purchaseOrder.getPaymentStatus());
		System.out.println("..................ispaymentComplete.." + ispaymentComplete + "..................");
		OrderStatus newOrderStatus = ispaymentComplete ? OrderStatus.ORDER_COMPLETED : OrderStatus.ORDER_CANCELED;
		System.out.println("..................newOrderStatus..." + newOrderStatus + "..................");
		purchaseOrder.setOrderStatus(newOrderStatus);
		System.out.println("..................purchaseOrder.getOrderStatus()" + purchaseOrder.getOrderStatus()
				+ "..................");

		if (ispaymentComplete) {

			List<Integer> prodIdList = purchaseOrder.getProductIds();
			List<Integer> quantityList = purchaseOrder.getQty();
			List<ProductCategories> categoriesList = purchaseOrder.getCategoryNames();
			for (int i = 0; i < categoriesList.size(); i++) {
				if (categoriesList.get(i).equals(ProductCategories.Fashion)) {
					inventoryServiceProxy.settingQuantityFashion(prodIdList.get(i), quantityList.get(i));
				} else if (categoriesList.get(i).equals(ProductCategories.Toys)) {
					inventoryServiceProxy.settingQuantityToys(prodIdList.get(i), quantityList.get(i));
				} else if (categoriesList.get(i).equals(ProductCategories.Electronics)) {
					inventoryServiceProxy.settingQuantityElectronics(prodIdList.get(i), quantityList.get(i));
				} else if (categoriesList.get(i).equals(ProductCategories.Beauty)) {
					inventoryServiceProxy.settingQuantityBeauty(prodIdList.get(i), quantityList.get(i));
				} else if (categoriesList.get(i).equals(ProductCategories.Accessories)) {
					inventoryServiceProxy.settingQuantityAccessory(prodIdList.get(i), quantityList.get(i));
				} else if (categoriesList.get(i).equals(ProductCategories.FootWear)) {
					inventoryServiceProxy.settingQuantityFootWear(prodIdList.get(i), quantityList.get(i));
				} else {
					System.out.println("incorrect category name given");
				}
				cartController.deleteAllCartItems();

			}

		}
		if (!ispaymentComplete) {
			publisher.publishOrderEvent(convertEntityToDto(purchaseOrder), newOrderStatus);
		}
	}

	public OrderRequestDTO convertEntityToDto(PurchaseOrder purchaseOrder) {
		OrderRequestDTO orderRequestDTO = new OrderRequestDTO();
		orderRequestDTO.setOrderId(purchaseOrder.getPurchaseOrderId());
		orderRequestDTO.setUserName(purchaseOrder.getUserName());
		orderRequestDTO.setProductIds(purchaseOrder.getProductIds());
		orderRequestDTO.setQty(purchaseOrder.getQty());
		orderRequestDTO.setCategoryNames(purchaseOrder.getCategoryNames());
		orderRequestDTO.setPriceList(purchaseOrder.getPriceList());
		orderRequestDTO.setProductName(purchaseOrder.getProductName());
		orderRequestDTO.setBrandName(purchaseOrder.getBrandName());
		orderRequestDTO.setSize(purchaseOrder.getSize());
		orderRequestDTO.setColor(purchaseOrder.getColor());
		orderRequestDTO.setSellerName(purchaseOrder.getSellerName());

		orderRequestDTO.setPrice(purchaseOrder.getPrice());
		return orderRequestDTO;
	}
}
