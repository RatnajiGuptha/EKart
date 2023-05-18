package com.ekart.payment.Repository;

import com.ekart.payment.entity.UserTransaction;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface UserTransactionRepository extends JpaRepository<UserTransaction, Integer> {
}
