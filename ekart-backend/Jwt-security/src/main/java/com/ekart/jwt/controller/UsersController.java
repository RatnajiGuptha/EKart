package com.ekart.jwt.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ekart.jwt.entity.CustomerEntity;
import com.ekart.jwt.repos.CustomerRepo;

@RestController
public class UsersController {

	@Autowired
	private CustomerRepo customerRepo;

	@Autowired
	private PasswordEncoder encoder;

	@GetMapping("/getUserByMail/{email}")
	public ResponseEntity<?> getUserByEmail(@PathVariable String email) {
		Optional<CustomerEntity> byEmail = customerRepo.findByEmail(email);
		if (byEmail.isEmpty()) {
			return ResponseEntity.ok("null");
		} else {
			System.out.println(byEmail.get().getEmail());
			return ResponseEntity.ok(byEmail.get().getEmail());
		}
	}

	@GetMapping("/getUserByContactNumber/{contactNumber}")
	public ResponseEntity<?> getUserByContactNumber(@PathVariable String contactNumber) {
		Optional<CustomerEntity> user = customerRepo.findByContactNumber(contactNumber);
		if (user.isEmpty()) {
			return ResponseEntity.ok("null");
		} else {
			System.out.println(user.get().getContactNumber());
			return ResponseEntity.ok(user.get().getContactNumber());
		}
	}

	
	@GetMapping("/api/getUserByName/{name}")
	public ResponseEntity<?> getUserName(@PathVariable String name) {
		Optional<CustomerEntity> user = customerRepo.findByFullName(name);
		if (user.isEmpty()) {
			return ResponseEntity.ok("null");
		} else {
			System.out.println(user.get().getFullName());
			return ResponseEntity.ok(user.get().getFullName());
		}
	}
	
	
	@GetMapping("/getUserInfo/{email}")
	public ResponseEntity<?> getUserByUserInfo(@PathVariable String email) {
		Optional<CustomerEntity> user = customerRepo.findByEmail(email);
		return ResponseEntity.ok(user);
	}

	@PutMapping("/updateUserData/{fullName}/{email}/{contactNumber}")
	public void updateUser(@PathVariable String fullName, @PathVariable String email,
			@PathVariable String contactNumber) {
		CustomerEntity customer = customerRepo.findByEmail(email).get();
		customer.setFullName(fullName);
		customer.setEmail(email);
		customer.setContactNumber(contactNumber);
		customerRepo.save(customer);
	}

	
	@PutMapping("/updatePasswordByEmail/{email}/{password}")
	public ResponseEntity<?> updatePasswordByEmail(@PathVariable String email, @PathVariable String password) {

		CustomerEntity customer = customerRepo.findByEmail(email).get();
		customer.setPassword(encoder.encode(password));
		customerRepo.save(customer);

		return ResponseEntity.status(HttpStatusCode.valueOf(201)).body("updated password");

	}

}
