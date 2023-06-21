package com.ekart.order.entity;

import org.springframework.stereotype.Component;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Component
public class PromoCodes {
	
	@Id
	private int promoCodeId;
	private String promoCode;
	private int discountPrice;
	private String status;

}
