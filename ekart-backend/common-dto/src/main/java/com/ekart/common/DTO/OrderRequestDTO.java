package com.ekart.common.DTO;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class OrderRequestDTO {
	private int orderId;
	private String userName;
	private List<Integer> productIds;
	private List<Integer> qty;
	private List<ProductCategories> categoryNames;
	private int price;
}
