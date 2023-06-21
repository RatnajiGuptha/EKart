package com.ekart.order.controller;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ekart.order.entity.Address;
import com.ekart.order.service.AddressService;

@RestController
@RequestMapping("/api/address")
public class AddressController {

	private static final Logger LOGGER = LoggerFactory.getLogger(AddressController.class);

	@Autowired
	private AddressService addressService;

	@PostMapping("/addAddress")
	public ResponseEntity<Integer> addNewAddress(@RequestBody Address address) {
		int response = addressService.addNewAddress(address);
		LOGGER.info("Adding new address");
		return ResponseEntity.status(HttpStatusCode.valueOf(201)).body(response);
	}

	@DeleteMapping("/deleteAddressById/{id}")
	public ResponseEntity<String> deleteAddressById(@PathVariable int id) {
		String response = addressService.deleteByAddressId(id);
		LOGGER.info("Delete the address by id {}", id);
		return ResponseEntity.status(HttpStatusCode.valueOf(200)).body(response);
	}

	@GetMapping("/GetAddressById/{id}")
	public ResponseEntity<Address> fetchAddressById(@PathVariable int id) {
		Address address = addressService.fetchById(id);
		LOGGER.info("Get the address by id {}", id);
		return ResponseEntity.status(HttpStatusCode.valueOf(200)).body(address);
	}

	@GetMapping("/getAllAddressByEmail/{email}")
	public ResponseEntity<List<Address>> fetchAllAddressbyEmail(@PathVariable String email) {
		List<Address> addressList = addressService.fetchByUserNameByEmail(email);
		return ResponseEntity.status(HttpStatusCode.valueOf(200)).body(addressList);
	}

}
