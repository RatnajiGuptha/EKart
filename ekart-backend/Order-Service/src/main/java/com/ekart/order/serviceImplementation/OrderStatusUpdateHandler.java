package com.ekart.order.serviceImplementation;

import java.util.function.Consumer;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;

import com.ekart.common.DTO.OrderRequestDTO;
import com.ekart.common.events.OrderStatus;
import com.ekart.common.events.PaymentStatus;
import com.ekart.order.Repository.OrderRepository;
import com.ekart.order.config.OrderStatusPublisher;
import com.ekart.order.entity.PurchaseOrder;
import org.springframework.transaction.annotation.Transactional;

@Configuration
public class OrderStatusUpdateHandler {

	@Autowired
	private OrderRepository orderRepository;
	
	@Autowired
	private OrderStatusPublisher publisher;

	@Transactional
	public void updateOrder(int id,Consumer<PurchaseOrder> consumer) {
		orderRepository.findById(id).ifPresent(consumer.andThen(this::updateOrder));
	}
	
	public void updateOrder(PurchaseOrder purchaseOrder) {
		System.out.println(".............."+purchaseOrder.getPaymentStatus());
		boolean ispaymentComplete = PaymentStatus.PAYMENT_COMPLETED.equals(purchaseOrder.getPaymentStatus());
		System.out.println("..................ispaymentComplete.."+ispaymentComplete+ "..................");
		OrderStatus newOrderStatus = ispaymentComplete?OrderStatus.ORDER_COMPLETED:OrderStatus.ORDER_CANCELED;
		System.out.println("..................newOrderStatus..."+newOrderStatus+ "..................");
		purchaseOrder.setOrderStatus(newOrderStatus);
		System.out.println("..................purchaseOrder.getOrderStatus()"+ purchaseOrder.getOrderStatus()+ "..................");

		if(!ispaymentComplete) {
			publisher.publishOrderEvent(convertEntityToDto(purchaseOrder), newOrderStatus);
		}
	}
	
	public OrderRequestDTO convertEntityToDto(PurchaseOrder purchaseOrder) {
		OrderRequestDTO orderRequestDTO = new OrderRequestDTO();
		orderRequestDTO.setOrderId(purchaseOrder.getId());
		orderRequestDTO.setUserName(purchaseOrder.getUserName());
		orderRequestDTO.setProductId(purchaseOrder.getProductId());
		orderRequestDTO.setPrice(purchaseOrder.getPrice());
		return orderRequestDTO;
	}
}
