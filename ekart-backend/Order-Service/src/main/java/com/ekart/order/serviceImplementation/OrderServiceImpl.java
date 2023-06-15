package com.ekart.order.serviceImplementation;

import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ekart.common.DTO.OrderRequestDTO;
import com.ekart.common.events.OrderStatus;
import com.ekart.order.Repository.OrderRepository;
import com.ekart.order.config.OrderStatusPublisher;
import com.ekart.order.entity.PurchaseOrder;
import com.ekart.order.service.OrderService;

@Service
public class OrderServiceImpl implements OrderService {

	@Autowired
	private OrderRepository orderRepository;

	@Autowired
	private OrderStatusPublisher orderStatusPublisher;



	@Override
	public PurchaseOrder createOrders(OrderRequestDTO orderRequestDTO) {
		PurchaseOrder purchaseOrder = orderRepository.save(convertDtoToEntity(orderRequestDTO));
//		purchaseOrder.setEmail(email);
		orderRequestDTO.setOrderId(purchaseOrder.getPurchaseOrderId());
		orderStatusPublisher.publishOrderEvent(orderRequestDTO, OrderStatus.ORDER_CREATED);
		return purchaseOrder;
	}

	@Override
	public List<PurchaseOrder> fetchOrders() {
		List<PurchaseOrder> orders = orderRepository.findAll();
		return orders;
	}

	private PurchaseOrder convertDtoToEntity(OrderRequestDTO dto) {
		PurchaseOrder purchaseOrder = new PurchaseOrder();
		purchaseOrder.setPurchaseOrderId(UUID.randomUUID());
		purchaseOrder.setUserName(dto.getUserName());
		purchaseOrder.setProductIds(dto.getProductIds());
		purchaseOrder.setQty(dto.getQty());
		purchaseOrder.setCategoryNames(dto.getCategoryNames());
		purchaseOrder.setPriceList(dto.getPriceList());
		purchaseOrder.setProductName(dto.getProductName());
		purchaseOrder.setBrandName(dto.getBrandName());
		purchaseOrder.setSize(dto.getSize());
		purchaseOrder.setColor(dto.getColor());
		purchaseOrder.setPrice(dto.getPrice());
		purchaseOrder.setSellerName(dto.getSellerName());
		purchaseOrder.setOrderStatus(OrderStatus.ORDER_CREATED);
		purchaseOrder.setEmail(dto.getEmail());
	
		purchaseOrder.setAddress(dto.getAddress());

		return purchaseOrder;
	}

	@Override
	public PurchaseOrder fetchOrderById(UUID id) {
		return orderRepository.findById(id).get();
	}

}
