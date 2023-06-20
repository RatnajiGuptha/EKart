package com.ekart.order.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ekart.order.entity.PromoCodes;

public interface PromoCodesRepository extends JpaRepository<PromoCodes, Integer> {
	
	public PromoCodes findByPromoCode(String promoCode);
}
