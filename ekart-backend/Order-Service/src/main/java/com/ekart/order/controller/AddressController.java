package com.ekart.order.controller;

import java.util.List;

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
//@CrossOrigin("http://localhost:3000/")
public class AddressController {
	
	@Autowired
	private AddressService addressService;
	
	@PostMapping("/addAddress")
	public ResponseEntity<Integer> addNewAddress(@RequestBody Address address) {
		int response=addressService.addNewAddress(address);
		return ResponseEntity.status(HttpStatusCode.valueOf(201)).body(response);
	}
	
	@GetMapping("/getAllAddress/{userName}")
	public ResponseEntity<List<Address>> fetchAllAddress(@PathVariable String userName){
		List<Address> addressList = addressService.fetchByUserName(userName);
		return ResponseEntity.status(HttpStatusCode.valueOf(200)).body(addressList);
	}
	
	@DeleteMapping("/deleteAddressById/{id}")
	public ResponseEntity<String> deleteAddressById(@PathVariable int id){
		String response = addressService.deleteByAddressId(id);
		return ResponseEntity.status(HttpStatusCode.valueOf(200)).body(response);
	}
	

	@GetMapping("/GetAddressById/{id}")
	public ResponseEntity<Address> fetchAddressById(@PathVariable int id){
		Address address = addressService.fetchById(id);
		return ResponseEntity.status(HttpStatusCode.valueOf(200)).body(address);
	}

	
	

}
