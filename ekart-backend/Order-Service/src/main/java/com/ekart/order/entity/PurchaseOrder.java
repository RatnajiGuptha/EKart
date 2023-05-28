package com.ekart.order.entity;

import java.util.List;
import java.util.UUID;

import com.ekart.common.DTO.ProductCategories;
import com.ekart.common.events.OrderStatus;
import com.ekart.common.events.PaymentStatus;

import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class PurchaseOrder {

	@Id
//	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private UUID purchaseOrderId;
	private String userName;
	private List<Integer> productIds;
	private List<Integer> qty;
	private List<ProductCategories> categoryNames;
	private int price;
	
	private List<Integer> priceList;
	private List<String> productName;
	private List<String> brandName;

	private List<String> size;
	private List<String> color;
	private List<String> sellerName;
	
	@Enumerated(EnumType.STRING)
	private OrderStatus orderStatus;
	@Enumerated(EnumType.STRING)
	private PaymentStatus paymentStatus;
}