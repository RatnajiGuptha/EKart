package com.ekart.order.service;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import com.ekart.order.entity.PromoCodes;

@Service
public interface PromoCodesService {
	
	public double getDiscountPrice(@PathVariable String promoCode);
	
	public PromoCodes savePromocode(PromoCodes promoCode);
	
	public List<PromoCodes> getAllPromoCodes();

	public List<PromoCodes> getAllPromoCodesByStatus(String status);

}
