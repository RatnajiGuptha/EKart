package com.ekart.order.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import com.ekart.common.DTO.OrderRequestDTO;
import com.ekart.common.events.OrderEvent;
import com.ekart.common.events.OrderStatus;

import reactor.core.publisher.Sinks;

@Service
@Component
public class OrderStatusPublisher {

	@Autowired
	private Sinks.Many<OrderEvent> orderSinks;
	
	public void publishOrderEvent(OrderRequestDTO orderRequestDto,OrderStatus orderStatus) {
		OrderEvent orderEvent = new OrderEvent(orderRequestDto,orderStatus);
		orderSinks.tryEmitNext(orderEvent);
	}
}
