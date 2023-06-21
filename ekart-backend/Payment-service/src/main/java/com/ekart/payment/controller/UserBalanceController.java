package com.ekart.payment.controller;

import com.ekart.payment.Repository.UserBalanceRepository;
import com.ekart.payment.entity.UserBalance;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/userBalance")
public class UserBalanceController {

	@Autowired
	private UserBalanceRepository userBalanceRepository;

	@PostMapping("/add")
	public String saveUserBalance(@RequestBody UserBalance userBalance) {
		userBalanceRepository.save(userBalance);
		return "Balnce Saved";
	}

	@GetMapping("/getBalanceByEmail/{email}")
	public int getBalanceByEmail(@PathVariable String email) {
		UserBalance userBalance = userBalanceRepository.findByEmail(email);

		return userBalance.getPrice();
	}

	@PutMapping("/updateBalanceByEmail/{email}/{amount}")
	public String updateUserBalanceByEmail(@PathVariable String email, @PathVariable int amount) {
		UserBalance ub = userBalanceRepository.findByEmail(email);
		ub.setPrice(ub.getPrice() + amount);
		userBalanceRepository.save(ub);
		return "user Balance Updated";
	}

	@PostMapping("/addBalanceByEmail/{email}/{amount}")
	public String addUserBalanceByEmail(@PathVariable String email, @PathVariable int amount) {
		UserBalance ub = userBalanceRepository.findByEmail(email);
		ub.setPrice(amount);
		userBalanceRepository.save(ub);
		return "user Balance Updated";
	}

}
