package com.ekart.order.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import jakarta.validation.constraints.Email;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ekart.common.DTO.OrderRequestDTO;
import com.ekart.common.DTO.ProductCategories;
import com.ekart.order.entity.Address;
import com.ekart.order.entity.Cart;
import com.ekart.order.entity.PurchaseOrder;
import com.ekart.order.service.AddressService;
import com.ekart.order.service.CartService;
import com.ekart.order.service.EmailSenderService;
import com.ekart.order.service.OrderService;

//@CrossOrigin(origins="http://localhost:3000/")
@RestController
@RequestMapping("/api")
public class OrderController {

	@Autowired
	private OrderService orderService;
	@Autowired
	private CartService cartService;
	
	@Autowired
	private AddressService addressService;
	
	@Autowired
	private EmailSenderService emailSenderService;
	
	String sessionOtp;

	@PostMapping("/createOrder/{userName}/{addressId}/{email}")
	public PurchaseOrder saveOrder(@PathVariable String userName,@PathVariable int addressId,@PathVariable  String email ) {

		List<Cart> cartList = cartService.getByUserName(userName);
		OrderRequestDTO orderRequestDTO = new OrderRequestDTO();
		orderRequestDTO.setUserName(userName);
		orderRequestDTO.setEmail(email);

		List<Integer> productIds = new ArrayList<>();
		List<ProductCategories> categories = new ArrayList<>();
		List<Integer> qtys = new ArrayList<>();
		List<Integer> priceList = new ArrayList<>();
		List<String> productName = new ArrayList<>();
		List<String> logoImg = new ArrayList<>();
		List<String> brandName = new ArrayList<>();

		List<String> size = new ArrayList<>();
		List<String> color = new ArrayList<>();
		List<String> sellerName = new ArrayList<>();

		int amount = 0;
		for (Cart cart : cartList) {
			productIds.add(cart.getProductId());
			categories.add(cart.getProductCategories());
			qtys.add(cart.getQty());
			priceList.add(cart.getProductPrice());
			productName.add(cart.getProductName());
			logoImg.add(cart.getLogoImg());
			brandName.add(cart.getBrandName());
			size.add(cart.getSize());
			color.add(cart.getColor());
			sellerName.add(cart.getSellerName());
			amount += (cart.getProductPrice() * cart.getQty());
		}
		orderRequestDTO.setProductIds(productIds);
		orderRequestDTO.setCategoryNames(categories);
		orderRequestDTO.setQty(qtys);
		orderRequestDTO.setPriceList(priceList);
		orderRequestDTO.setProductName(productName);
		orderRequestDTO.setBrandName(brandName);
		orderRequestDTO.setSize(size);
		orderRequestDTO.setColor(color);
		orderRequestDTO.setSellerName(sellerName);
		orderRequestDTO.setPrice(amount);
		Address address = addressService.fetchById(addressId);
		List<String> addr = new ArrayList<String>();
		addr.add(String.valueOf(addressId));
		addr.add(address.getUserName());
		addr.add(address.getReceiverName());
		addr.add(address.getReceiverPhoneNumber());
		addr.add(address.getBuildingNo());
		addr.add(address.getStreet1());
		addr.add(address.getCity());
		addr.add(address.getDistrict());
		addr.add(address.getState());
		addr.add(String.valueOf(address.getPincode()));

		orderRequestDTO.setAddress(addr);
		return orderService.createOrders(orderRequestDTO);

	}

	@GetMapping("/getOrders")
	public List<PurchaseOrder> getAllOrders() {
		return orderService.fetchOrders();
	}


	@GetMapping("/getOrders/{Id}")
	public PurchaseOrder getOrderById(@PathVariable UUID Id) {
		return orderService.fetchOrderById(Id);
	}
	
	@GetMapping("/generateOTP/{email}")
	public String generateOtp(@PathVariable String email) {
		String otp="";
		if(email !=null) {
			otp = emailSenderService.generateOtp();
			emailSenderService.sendOtp(email, otp);			
		}
		
		return otp;		
	}
}
