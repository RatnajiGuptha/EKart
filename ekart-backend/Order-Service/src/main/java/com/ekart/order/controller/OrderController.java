package com.ekart.order.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
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
import com.ekart.order.service.PromoCodesService;

@RestController
@RequestMapping("/api")
public class OrderController {

	private static final Logger LOGGER = LoggerFactory.getLogger(OrderController.class);

	@Autowired
	private OrderService orderService;
	@Autowired
	private CartService cartService;

	@Autowired
	private AddressService addressService;

	@Autowired
	private EmailSenderService emailSenderService;

	@Autowired
	private PromoCodesService promoService;

	String sessionOtp;

	@PostMapping("/createOrder/{addressId}/{promoCode}/{email}")
	public PurchaseOrder saveOrder(@PathVariable int addressId, @PathVariable String email,
			@PathVariable String promoCode) {

		double discountPrice = 0;
		if (!(promoCode.equals("none"))) {
			discountPrice = promoService.getDiscountPrice(promoCode);
		}

		List<Cart> cartList = cartService.getByEmail(email);
		OrderRequestDTO orderRequestDTO = new OrderRequestDTO();

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
		int totalAmount = 0;
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
		totalAmount = amount;
		amount -= amount * discountPrice;
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
		orderRequestDTO.setPromoCode(promoCode);
		orderRequestDTO.setTotalPrice(totalAmount);

		Address address = addressService.fetchById(addressId);
		List<String> addr = new ArrayList<String>();
		addr.add(String.valueOf(addressId));

		addr.add(address.getEmail());
		addr.add(address.getReceiverName());
		addr.add(address.getReceiverPhoneNumber());
		addr.add(address.getBuildingNo());
		addr.add(address.getStreet1());
		addr.add(address.getCity());
		addr.add(address.getDistrict());
		addr.add(address.getState());
		addr.add(String.valueOf(address.getPincode()));

		orderRequestDTO.setAddress(addr);
		LOGGER.info("Creating order for user name {} with email {} for address id {}", email, addressId);
		return orderService.createOrders(orderRequestDTO);

	}

	@GetMapping("/getOrders")
	public List<PurchaseOrder> getAllOrders() {
		LOGGER.info("Returns all orders");
		return orderService.fetchOrders();
	}

	@GetMapping("/getOrders/{Id}")
	public PurchaseOrder getOrderById(@PathVariable UUID Id) {
		LOGGER.info("Return order by id {}");
		return orderService.fetchOrderById(Id);
	}

	@GetMapping("/getByEmail/{email}")
	public List<PurchaseOrder> getOrderByEmail(@PathVariable String email) {
		LOGGER.info("Return order by email {}", email);
		return orderService.fetchOrderByEmail(email);
	}

	@GetMapping("/generateOTP/{email}/{subject}/{text}")
	public String generateOtp(@PathVariable String email,@PathVariable String subject,@PathVariable String text) {
		String otp = "";
		if (email != null) {
			otp = emailSenderService.generateOtp();
			emailSenderService.sendOtp(email, otp,subject,text);
		}
		LOGGER.info("Generated the otp by email", email);
		return otp;
	}
}
