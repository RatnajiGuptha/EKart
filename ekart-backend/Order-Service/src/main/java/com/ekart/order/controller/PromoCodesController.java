package com.ekart.order.controller;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ekart.order.entity.PromoCodes;
import com.ekart.order.service.PromoCodesService;

@RestController
@RequestMapping("/api/promocodes")
public class PromoCodesController {

	private static final Logger LOGGER = LoggerFactory.getLogger(PromoCodesController.class);

	@Autowired
	private PromoCodesService promoService;

	@PostMapping("/addNewPromoCode")
	public ResponseEntity<PromoCodes> addPromoCodes(@RequestBody PromoCodes promoCode) {
		PromoCodes newPromoCode = promoService.savePromocode(promoCode);
		LOGGER.info("add new promo code");
		return ResponseEntity.status(HttpStatusCode.valueOf(201)).body(newPromoCode);
	}

	@GetMapping("/getAllPromoCodes")
	public ResponseEntity<List<PromoCodes>> getAllPromoCodes() {
		List<PromoCodes> allPromoCodes = promoService.getAllPromoCodes();
		LOGGER.info("Returning all promocode");
		return ResponseEntity.status(HttpStatusCode.valueOf(200)).body(allPromoCodes);
	}

	@GetMapping("/getDiscountPrice/{promoCode}")
	public ResponseEntity<?> getDiscountPrice(@PathVariable String promoCode) {
		double discountPrice;
		if (promoCode.equals("none")) {
			discountPrice = 0;
		} else {
			discountPrice = promoService.getDiscountPrice(promoCode);
		}
		LOGGER.info("Returning  value {} of promocode", promoCode);
		return ResponseEntity.status(HttpStatusCode.valueOf(200)).body(discountPrice);

	}

	@GetMapping("/getAllPromoCodes/{status}")
	public ResponseEntity<List<PromoCodes>> getAllPromoCodesByStatus(@PathVariable String status) {
		List<PromoCodes> allPromoCodes = promoService.getAllPromoCodesByStatus(status);
		LOGGER.info("Returning all promocode by status --> {}" , status);
		return ResponseEntity.status(HttpStatusCode.valueOf(200)).body(allPromoCodes);
	}

}
