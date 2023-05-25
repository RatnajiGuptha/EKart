package com.ekart.jwt.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.ekart.jwt.entity.CustomerEntity;
import com.ekart.jwt.repos.CustomerRepo;

@RestController
@CrossOrigin("http://localhost:3000/")
public class UsersController {

	@Autowired
	private CustomerRepo customerRepo;

	@GetMapping("/getUserName/{userName}")
	public ResponseEntity<?> getUserByUserName(@PathVariable String userName) {
		Optional<CustomerEntity> user = customerRepo.findByUserName(userName);

		return ResponseEntity.ok(user.get().getUserName());
	}

	@GetMapping("/getUserByMail/{email}")
	public ResponseEntity<?> getUserByEmail(@PathVariable String email) {
		Optional<CustomerEntity> byEmail = customerRepo.findByEmail(email);
		return ResponseEntity.ok(byEmail.get().getEmail());
	}
}
