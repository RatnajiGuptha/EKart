package com.ekart.payment.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ekart.payment.Repository.UserTransactionRepository;
import com.ekart.payment.entity.UserTransaction;

import io.micrometer.observation.annotation.Observed;

@RestController
@RequestMapping("/api/transaction")
public class UserTransactionController {

	@Autowired
	private UserTransactionRepository userTransactionRepository;

	@GetMapping("/getDetails")
	@Observed(name="get.allTranscationDetails")
	public List<UserTransaction> getTransactionDetails() {
		return userTransactionRepository.findAll();
	}

	@GetMapping("/getTransactionDetails/{email}")
	@Observed(name="get.allTranscationDetailsByEmail")
	public List<UserTransaction> getTransactionByUser(@PathVariable String email) {
		return userTransactionRepository.findByEmail(email);
	}

}
