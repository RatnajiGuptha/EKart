package com.ekart.payment.controller;

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

import io.micrometer.observation.annotation.Observed;

@RestController
@RequestMapping("/api/userBalance")
public class UserBalanceController {

	@Autowired
	private UserBalanceRepository userBalanceRepository;
	

	@GetMapping("/getBalanceByEmail/{email}")
	@Observed(name="get.balanceByEmail")
	public int getBalanceByEmail(@PathVariable String email) {
		UserBalance userBalance = userBalanceRepository.findByEmail(email);

		return userBalance.getPrice();
	}

	@PutMapping("/updateBalanceByEmail/{email}/{amount}")
	@Observed(name="update.balanceByEmail")
	public String updateUserBalanceByEmail(@PathVariable String email, @PathVariable int amount) {
		UserBalance ub = userBalanceRepository.findByEmail(email);
		ub.setPrice(ub.getPrice() + amount);
		userBalanceRepository.save(ub);
		return "user Balance Updated";
	}

	@PostMapping("/addBalance")
	@Observed(name="add.balanceByEmail")
	public String addUserBalanceByEmail(@RequestBody UserBalance ub) {

		userBalanceRepository.save(ub);
		return "user Balance Updated";
	}

}
