package com.ekart.payment.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ekart.payment.Repository.UserBalanceRepository;
import com.ekart.payment.entity.UserBalance;

@RestController
@RequestMapping("/api/userBalance")
public class UserBalanceController {

	private static final Logger LOGGER = LoggerFactory.getLogger(UserBalanceController.class);
	@Autowired
	private UserBalanceRepository userBalanceRepository;

	@GetMapping("/getBalanceByEmail/{email}")
	public int getBalanceByEmail(@PathVariable String email) {
		UserBalance userBalance = userBalanceRepository.findByEmail(email);
		LOGGER.info("Returning user balance transaction details by email {}", email);
		return userBalance.getPrice();
	}

	@PutMapping("/updateBalanceByEmail/{email}/{amount}")
	public String updateUserBalanceByEmail(@PathVariable String email, @PathVariable int amount) {
		UserBalance ub = userBalanceRepository.findByEmail(email);
		ub.setPrice(ub.getPrice() + amount);
		userBalanceRepository.save(ub);
		LOGGER.info("updating the user  balance  by email {}" ,email);
		return "user Balance Updated";
	}

	@PostMapping("/addBalance")
	public String addUserBalanceByEmail(@RequestBody UserBalance ub) {
		userBalanceRepository.save(ub);
		LOGGER.info("creating  user  balance account by email {}" ,ub.getEmail());
		return "user Balance Updated";
	}

}
