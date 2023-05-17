package com.ekart.common.DTO;

import com.ekart.common.events.OrderStatus;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class OrderResponseDTO {
	private int orderId;
	private String userName;
	private int productId;
	private int price;
	private OrderStatus orderStatus;
}
