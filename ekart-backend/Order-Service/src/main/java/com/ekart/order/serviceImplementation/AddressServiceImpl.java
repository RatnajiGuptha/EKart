package com.ekart.order.serviceImplementation;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ekart.order.Repository.AddressRepository;
import com.ekart.order.entity.Address;
import com.ekart.order.service.AddressService;

import io.micrometer.observation.annotation.Observed;

@Service
public class AddressServiceImpl implements AddressService {

	@Autowired
	private AddressRepository addressRepository;

	@Override
	@Observed(name="add.address")
	public int addNewAddress(Address address) {
		Address address1 = addressRepository.save(address);
		return address1.getAddressId();
	}

	@Override
	@Observed(name="get.allAddress")
	public List<Address> getAllAddress() {
		List<Address> allAddressList = addressRepository.findAll();
		return allAddressList;
	}

	@Override
	@Observed(name="get.addressById")
	public Address fetchById(int id) {

		return addressRepository.findById(id).get();
	}

	@Override
	@Observed(name="delete.addressById")
	public String deleteByAddressId(int id) {
		addressRepository.deleteById(id);
		return "address deleted successfully";
	}

	

	@Override
	@Observed(name="get.addressByEmail")
	public List<Address> fetchByUserNameByEmail(String email) {
		
		return addressRepository.findByEmail(email);
	}

}
