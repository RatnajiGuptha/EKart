package com.ekart.common.DTO;

import com.ekart.common.events.PaymentStatus;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class PaymentResponseDTO{

	private int paymentId;
	private int userName;
	private int amount;
	private PaymentStatus paymentStatus;
}
