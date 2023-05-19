package com.ekart.order.service;

import java.util.List;

import com.ekart.common.DTO.OrderRequestDTO;
import com.ekart.order.entity.PurchaseOrder;

public interface OrderService {

	public PurchaseOrder createOrder(OrderRequestDTO orderRequestDTO);

	public List<PurchaseOrder> fetchOrders();

}
