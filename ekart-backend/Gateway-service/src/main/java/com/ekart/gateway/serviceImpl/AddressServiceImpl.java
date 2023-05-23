package com.ekart.gateway.serviceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.ekart.gateway.Repository.AddressRepository;
import com.ekart.gateway.entity.Address;
import com.ekart.gateway.service.AddressService;

public class AddressServiceImpl implements AddressService{

	@Autowired
	private AddressRepository addressRepository;

	@Override
	public String addNewAddress(Address address) {
		addressRepository.save(address);
		return "new address added";
	}

	@Override
	public List<Address> getAllAddress() {
		List<Address> allAddressList = addressRepository.findAll();
		return allAddressList;
	}

	@Override
	public Address fetchById(int id) {
		
		return addressRepository.findById(id).get();
	}

	
	
	
}
