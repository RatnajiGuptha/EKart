package com.ekart.payment.config;

import com.ekart.common.events.OrderEvent;
import com.ekart.common.events.OrderStatus;
import com.ekart.common.events.PaymentEvent;
import com.ekart.payment.service.PaymentService;
import org.reactivestreams.Publisher;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import java.util.function.Function;

@Configuration
public class PaymentConsumerConfig {

    @Autowired
    private PaymentService paymentService;

    @Bean
    public Function<Flux<OrderEvent>, Flux<PaymentEvent>> paymentProcessor() {
        return orderEventFlux -> orderEventFlux.flatMap(this::processPayment);
    }

    private Mono<PaymentEvent> processPayment(OrderEvent orderEvent) {

        if(OrderStatus.ORDER_CREATED.equals(orderEvent.getOrderStatus())){
            return Mono.fromSupplier(()-> this.paymentService.newOrderEvent(orderEvent));
        }
        else{
            return Mono.fromRunnable(()-> this.paymentService.cancelOrder(orderEvent));
        }
    }

}
