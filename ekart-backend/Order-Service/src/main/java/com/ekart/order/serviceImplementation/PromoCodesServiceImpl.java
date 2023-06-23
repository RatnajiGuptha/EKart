package com.ekart.order.serviceImplementation;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ekart.order.Repository.PromoCodesRepository;
import com.ekart.order.entity.PromoCodes;
import com.ekart.order.service.PromoCodesService;

@Service
public class PromoCodesServiceImpl implements PromoCodesService {

	@Autowired
	private PromoCodesRepository promoRepo;

	@Override
	public double getDiscountPrice(String promoCode) {
		PromoCodes promo = new PromoCodes();
		promo = promoRepo.findByPromoCode(promoCode);
		double discountPrice = promo.getDiscountPrice();
		return discountPrice;
	}

	@Override
	public PromoCodes savePromocode(PromoCodes promoCode) {
		PromoCodes newPromoCode = promoRepo.save(promoCode);
		return newPromoCode;
	}

	@Override
	public List<PromoCodes> getAllPromoCodes() {
		List<PromoCodes> allPromoCodes = promoRepo.findAll();
		return allPromoCodes;
	}

	@Override
	public List<PromoCodes> getAllPromoCodesByStatus(String status) {
		List<PromoCodes> allPromoCodes = promoRepo.findByStatus(status);
		return allPromoCodes;
	}

}
