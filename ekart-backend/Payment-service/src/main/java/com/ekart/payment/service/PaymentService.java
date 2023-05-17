package com.ekart.payment.service;

import com.ekart.common.DTO.OrderRequestDTO;
import com.ekart.common.DTO.PaymentRequestDTO;
import com.ekart.common.events.OrderEvent;
import com.ekart.common.events.PaymentEvent;
import com.ekart.common.events.PaymentStatus;
import com.ekart.payment.Repository.UserBalanceRepository;
import com.ekart.payment.Repository.UserTransactionRepository;
import com.ekart.payment.entity.UserBalance;
import com.ekart.payment.entity.UserTransaction;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class PaymentService {

    @Autowired
    private UserBalanceRepository userBalanceRepository;

    @Autowired
    private UserTransactionRepository userTransactionRepository;

    private static final Logger logger = LoggerFactory.getLogger(PaymentService.class);

    @Transactional
    public PaymentEvent newOrderEvent(OrderEvent orderEvent) {

        OrderRequestDTO orderRequestDTO = orderEvent.getOrderRequestDTO();
        logger.info(orderRequestDTO.toString());

        PaymentRequestDTO paymentRequestDTO = new PaymentRequestDTO(orderRequestDTO.getOrderId(), orderRequestDTO.getUserName(),orderRequestDTO.getPrice());
        logger.info((paymentRequestDTO.toString()));

        return userBalanceRepository.findById(orderRequestDTO.getOrderId())
                .filter(ub-> ub.getPrice() > orderRequestDTO.getPrice())
                .map(ub -> {
                    ub.setPrice(ub.getPrice() - orderRequestDTO.getPrice());

                    userTransactionRepository.save(new UserTransaction(
                            orderRequestDTO.getOrderId(), orderRequestDTO.getUserName()
                    , orderRequestDTO.getPrice()));

                    return new PaymentEvent(paymentRequestDTO, PaymentStatus.PAYMENT_COMPLETED);
                }).orElse(new PaymentEvent(paymentRequestDTO, PaymentStatus.PAYMENT_FAILED));

    }

    @Transactional
    public void cancelOrder(OrderEvent orderEvent) {
        UserTransaction ut =  userTransactionRepository.findById(orderEvent.getOrderRequestDTO().getOrderId()).get();

        System.out.println("........................");
        System.out.println(orderEvent.getOrderRequestDTO().getUserName());
        System.out.println("........................");
        UserBalance ub = userBalanceRepository.findById(orderEvent.getOrderRequestDTO().getOrderId()).get();

        ub.setPrice(ub.getPrice() + ut.getAmount());

        userTransactionRepository.deleteById(ut.getOrderId());
    }
}
