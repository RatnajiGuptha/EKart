package com.ekart.gateway.service;

import java.util.List;

import com.ekart.gateway.entity.Address;

public interface AddressService {

	
	public String addNewAddress(Address address);
	
	public List<Address> getAllAddress();
	
	public Address fetchById(int id);
	
}
