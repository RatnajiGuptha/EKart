package com.ekart.common.DTO;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class OrderRequestDTO {
	private int orderId;
	private String userName;
	private int productId;
	private int price;
}
