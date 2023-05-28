package com.ekart.common.events;

import java.util.Date;
import java.util.UUID;

import com.ekart.common.DTO.OrderRequestDTO;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class OrderEvent implements Event{
	
	private UUID eventId=UUID.randomUUID();
	private Date eventDate=new Date();
	private OrderRequestDTO orderRequestDTO;
	private OrderStatus orderStatus;
	
	public OrderEvent(OrderRequestDTO orderRequestDTO,OrderStatus orderStatus) {
		this.orderRequestDTO=orderRequestDTO;
		this.orderStatus=orderStatus;
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
