package com.ekart.order.controller;

import java.util.List;

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
	
	@Autowired
	private PromoCodesService promoService;
	
	@PostMapping("/addNewPromoCode")
	public ResponseEntity<PromoCodes> addPromoCodes(@RequestBody PromoCodes promoCode){
		PromoCodes newPromoCode = promoService.savePromocode(promoCode);
		return ResponseEntity.status(HttpStatusCode.valueOf(201)).body(newPromoCode);
	}
	
	@GetMapping("/getAllPromoCodes")
	public ResponseEntity<List<PromoCodes>> getAllPromoCodes(){
		List<PromoCodes> allPromoCodes = promoService.getAllPromoCodes();
		return ResponseEntity.status(HttpStatusCode.valueOf(200)).body(allPromoCodes);
	}
	
	@GetMapping("/getDiscountPrice/{promoCode}")
	public ResponseEntity<?> getDiscountPrice(@PathVariable String promoCode){
		
		int discountPrice = promoService.getDiscountPrice(promoCode);
		return ResponseEntity.status(HttpStatusCode.valueOf(200)).body(discountPrice);
		
	}
	
}
