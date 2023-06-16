package com.ekart.order.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.ekart.order.entity.Address;

@Service
public interface AddressService {

	public int addNewAddress(Address address);

	public List<Address> getAllAddress();

	public Address fetchById(int id);

	public String deleteByAddressId(int id);
	
	public List<Address> fetchByUserName(String userName);

}
