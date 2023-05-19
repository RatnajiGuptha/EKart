package com.ekart.common.DTO;

import com.ekart.common.events.OrderStatus;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class OrderResponseDTO {
	private int orderId;
	private String userName;
	private List<Integer> qty;
	private List<Integer> productIds;
	private List<ProductCategories> categoryNames;
	private OrderStatus orderStatus;
}
