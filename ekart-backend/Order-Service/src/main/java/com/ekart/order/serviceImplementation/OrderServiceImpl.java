package com.ekart.order.serviceImplementation;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ekart.common.DTO.OrderRequestDTO;
import com.ekart.common.events.OrderStatus;
import com.ekart.order.Repository.OrderRepository;
import com.ekart.order.config.OrderStatusPublisher;
import com.ekart.order.entity.PurchaseOrder;
import com.ekart.order.service.OrderService;

@Service
public class OrderServiceImpl implements OrderService{

	@Autowired
	private OrderRepository orderRepository;
	@Autowired
	private OrderStatusPublisher orderStatusPublisher;
	
	
	@Override
	public PurchaseOrder createOrder(OrderRequestDTO orderRequestDTO) {
		PurchaseOrder purchaseOrder = orderRepository.save(convertDtoToEntity(orderRequestDTO));
		orderRequestDTO.setOrderId(purchaseOrder.getId());
		orderStatusPublisher.publishOrderEvent(orderRequestDTO, OrderStatus.ORDER_CREATED);
		return purchaseOrder;
		
	}

	@Override
	public List<PurchaseOrder> fetchOrders() {
		List<PurchaseOrder> orders=orderRepository.findAll();
		return orders;
	}
	
	private PurchaseOrder convertDtoToEntity(OrderRequestDTO dto) {
		PurchaseOrder purchaseOrder = new PurchaseOrder();
		purchaseOrder.setUserName(dto.getUserName());
		purchaseOrder.setProductId(dto.getProductId());
		purchaseOrder.setPrice(dto.getPrice());
		purchaseOrder.setOrderStatus(OrderStatus.ORDER_CREATED);
		return purchaseOrder;
	}

}
