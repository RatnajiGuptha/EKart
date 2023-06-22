package com.ekart.payment.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ekart.payment.entity.UserTransaction;

public interface UserTransactionRepository extends JpaRepository<UserTransaction, Integer> {

	List<UserTransaction> findByEmail(String email);
}
