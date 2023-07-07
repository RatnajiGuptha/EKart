package com.ekart.order.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ekart.order.entity.PromoCodes;

public interface PromoCodesRepository extends JpaRepository<PromoCodes, Integer> {

	public PromoCodes findByPromoCode(String promoCode);

	public List<PromoCodes> findByStatus(String status);
}
