package com.ekart.order.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ekart.common.DTO.OrderRequestDTO;
import com.ekart.order.entity.Cart;
import com.ekart.order.entity.PurchaseOrder;
import com.ekart.order.service.CartService;
import com.ekart.order.service.OrderService;

@RestController
@RequestMapping("/api")
public class OrderController {
	
	@Autowired
	private OrderService orderService;
	@Autowired
	private CartService cartService;
	
	@PostMapping("/createOrder")
	public PurchaseOrder saveOrder() {
		Cart cart = cartService.getByProductId(1);
		OrderRequestDTO orderRequestDTO = new OrderRequestDTO();
		orderRequestDTO.setUserName(cart.getUserName());
		orderRequestDTO.setProductId(cart.getProductId());
		orderRequestDTO.setPrice(cart.getProductPrice());
		
		return orderService.createOrder(orderRequestDTO);
	}
	
	@GetMapping("/getOrders")
	public List<PurchaseOrder> getAllOrders(){
		return orderService.fetchOrders();
	}
	
}
