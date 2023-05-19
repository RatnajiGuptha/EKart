package com.ekart.order.controller;

import java.util.ArrayList;
import java.util.List;

import com.ekart.common.DTO.ProductCategories;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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


	@PostMapping("/createOrder/{userName}")
	public PurchaseOrder saveOrder(@PathVariable String userName) {
		List<Cart> cartList = cartService.getByUserName(userName);
		OrderRequestDTO orderRequestDTO = new OrderRequestDTO();
		orderRequestDTO.setUserName(userName);

		List<Integer> productIds = new ArrayList<>();
		List<ProductCategories> categories = new ArrayList<>();
		List<Integer> qtys = new ArrayList<>();

		int amount = 0;
		for(Cart cart : cartList){
			productIds.add(cart.getProductId());
			categories.add(cart.getProductCategories());
			qtys.add(cart.getQty());
			amount += (cart.getProductPrice()*cart.getQty());
		}
		orderRequestDTO.setProductIds(productIds);
		orderRequestDTO.setCategoryNames(categories);
		orderRequestDTO.setPrice(amount);
		orderRequestDTO.setQty(qtys);

		return orderService.createOrders(orderRequestDTO);


	}

		@GetMapping("/getOrders")
	public List<PurchaseOrder> getAllOrders(){
		return orderService.fetchOrders();
	}
	
}
