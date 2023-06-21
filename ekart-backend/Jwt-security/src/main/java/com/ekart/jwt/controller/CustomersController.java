package com.ekart.jwt.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.ekart.jwt.entity.CustomerEntity;
import com.ekart.jwt.entity.JwtRequest;
import com.ekart.jwt.entity.JwtResponse;
import com.ekart.jwt.repos.CustomerRepo;
import com.ekart.jwt.security.CustomerDetailsService;
import com.ekart.jwt.security.JwtService;

@RestController
public class CustomersController {

	@Autowired
	private JwtService jwtService;

	@Autowired
	private AuthenticationManager authenticationManager;

	@Autowired
	private CustomerDetailsService customerDetailsService;

	@Autowired
	private CustomerRepo customerRepo;

	@Autowired
	private PasswordEncoder encoder;

	@PostMapping("/login")
	public ResponseEntity<?> createToken(@RequestBody JwtRequest jwtRequest) throws Exception {
		try {
			authenticationManager.authenticate(
					new UsernamePasswordAuthenticationToken(jwtRequest.getEmail(), jwtRequest.getPassword()));
		} catch (BadCredentialsException e) {
			return ResponseEntity.badRequest().body("Bad Credential");
		}

		UserDetails userDetails = customerDetailsService.loadUserByUsername(jwtRequest.getEmail());
		String token = this.jwtService.generateToken(userDetails.getUsername());
		System.out.println(token);
		return ResponseEntity.ok(new JwtResponse(token));
	}

	@PostMapping("/addUser")
	public ResponseEntity<?> addCustomer(@RequestBody CustomerEntity customerEntity) {
		Optional<CustomerEntity> name = customerRepo.findByEmail(customerEntity.getEmail());

		if (!name.isEmpty()) {
			return ResponseEntity.badRequest().body("User already Exists");
		}

		customerEntity.setRoles("CUSTOMER");
		customerEntity.setPassword(encoder.encode(customerEntity.getPassword()));
		customerRepo.save(customerEntity);

		return ResponseEntity.ok("User added sucessfully");
	}

	@PostMapping("/addSeller")
	public ResponseEntity<?> addSeller(@RequestBody CustomerEntity customerEntity) {
		Optional<CustomerEntity> name = customerRepo.findByEmail(customerEntity.getEmail());

		if (!name.isEmpty()) {
			return ResponseEntity.badRequest().body("User already Exists");
		}

		customerEntity.setRoles("SELLER");
		customerEntity.setPassword(encoder.encode(customerEntity.getPassword()));
		customerRepo.save(customerEntity);

		return ResponseEntity.ok("Seller added sucessfully");
	}

}
