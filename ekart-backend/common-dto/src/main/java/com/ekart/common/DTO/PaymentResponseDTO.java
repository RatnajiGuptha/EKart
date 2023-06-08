package com.ekart.common.DTO;

import java.util.List;
import java.util.UUID;

import com.ekart.common.events.PaymentStatus;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class PaymentResponseDTO{

	private UUID paymentId;
	private String userName;
	private String email;
	private List<Integer> productIds;
	private List<Integer> qty;
	private List<ProductCategories> categoryNames;
	private int amount;
	
	private List<Integer> priceList;
	private List<String> productName;
	private List<String> brandName;

	private List<String> size;
	private List<String> color;
	private List<String> sellerName;
	private PaymentStatus paymentStatus;
}
