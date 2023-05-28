package com.ekart.gateway.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.ekart.gateway.entity.Address;

@Service
public interface AddressService {

	public String addNewAddress(Address address);

	public List<Address> getAllAddress();

	public Address fetchById(int id);

}
