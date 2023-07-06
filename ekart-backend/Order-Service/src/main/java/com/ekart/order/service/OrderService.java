package com.ekart.order.service;

import java.util.List;
import java.util.UUID;

import com.ekart.common.DTO.OrderRequestDTO;
import com.ekart.order.entity.PurchaseOrder;

public interface OrderService {

	public List<PurchaseOrder> fetchOrders();

	PurchaseOrder createOrders(OrderRequestDTO orderRequestDTO);

	PurchaseOrder fetchOrderById(UUID id);


	public List<PurchaseOrder> fetchOrderByEmail(String email);
}
