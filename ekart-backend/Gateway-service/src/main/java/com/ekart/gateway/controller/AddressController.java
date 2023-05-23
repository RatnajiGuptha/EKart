package com.ekart.gateway.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ekart.gateway.entity.Address;
import com.ekart.gateway.service.AddressService;

@RestController
@RequestMapping("/api/address")
public class AddressController {
	
	@Autowired
	private AddressService addressService;
	
	@PostMapping("/addAddress")
	public ResponseEntity<String> addNewAddress(@RequestBody Address address) {
		String response=addressService.addNewAddress(address);
		return ResponseEntity.status(HttpStatusCode.valueOf(201)).body(response);
	}
	
	@GetMapping("/getAllAddress")
	public ResponseEntity<List<Address>> fetchAllAddress(){
		List<Address> addressList = addressService.getAllAddress();
		return ResponseEntity.status(HttpStatusCode.valueOf(200)).body(addressList);
	}
	
	@PutMapping("/updateAddress/{id}/{address}")
	public ResponseEntity<String> updateAddressById(@PathVariable int id,@PathVariable String address){
		Address addressResponse = addressService.fetchById(id);
		addressResponse.setAddress(address);
		return ResponseEntity.status(HttpStatusCode.valueOf(201)).body("updated address");
	}
	
	

}
