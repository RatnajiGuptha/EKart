package com.ekart.payment.service;

import java.util.UUID;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ekart.common.DTO.OrderRequestDTO;
import com.ekart.common.DTO.PaymentRequestDTO;
import com.ekart.common.events.OrderEvent;
import com.ekart.common.events.PaymentEvent;
import com.ekart.common.events.PaymentStatus;
import com.ekart.payment.Repository.UserBalanceRepository;
import com.ekart.payment.Repository.UserTransactionRepository;
import com.ekart.payment.entity.UserBalance;
import com.ekart.payment.entity.UserTransaction;

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

        PaymentRequestDTO paymentRequestDTO = new PaymentRequestDTO(orderRequestDTO.getOrderId(),orderRequestDTO.getEmail()
                ,orderRequestDTO.getProductIds(),orderRequestDTO.getQty(),orderRequestDTO.getCategoryNames(),orderRequestDTO.getPriceList(),orderRequestDTO.getProductName(),orderRequestDTO.getBrandName(),orderRequestDTO.getAddress(), orderRequestDTO.getSize(),orderRequestDTO.getColor()
                ,orderRequestDTO.getSellerName(),orderRequestDTO.getPrice());
        logger.info((paymentRequestDTO.toString()));


        
        UserBalance userBalance = userBalanceRepository.findByEmail(orderRequestDTO.getEmail());
        if(userBalance != null) {

            int id = userBalance.getUserId();

            return userBalanceRepository.findById(id)
                    .filter(ub -> ub.getPrice() > orderRequestDTO.getPrice())
                    .map(ub -> {
                        ub.setPrice(ub.getPrice() - orderRequestDTO.getPrice());
                        userTransactionRepository.save(new UserTransaction(UUID.randomUUID(),orderRequestDTO.getEmail(),orderRequestDTO.getPrice()));

                        return new PaymentEvent(paymentRequestDTO, PaymentStatus.PAYMENT_COMPLETED);
                    }).orElse(new PaymentEvent(paymentRequestDTO, PaymentStatus.PAYMENT_FAILED));
        }
        return new PaymentEvent(paymentRequestDTO, PaymentStatus.PAYMENT_FAILED);
    }
    
    

    @Transactional
    public void cancelOrder(OrderEvent orderEvent) {
}
}