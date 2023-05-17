package com.ekart.common.events;

import java.util.Date;
import java.util.UUID;

import com.ekart.common.DTO.PaymentRequestDTO;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class PaymentEvent implements Event{

	private UUID eventId = UUID.randomUUID();
	private Date eventDate = new Date();
	private PaymentRequestDTO paymentRequestDTO;
	private PaymentStatus paymentStatus;
	
	public PaymentEvent(PaymentRequestDTO paymentRequestDTO,PaymentStatus paymentStatus) {
		this.paymentRequestDTO=paymentRequestDTO;
		this.paymentStatus=paymentStatus;
	}
	
	@Override
	public UUID getEventId() {
		return eventId;
	}

	@Override
	public Date getEventDate() {
		return eventDate;
	}

}
