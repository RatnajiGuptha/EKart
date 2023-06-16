package com.ekart.order.serviceImplementation;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ekart.order.Repository.AddressRepository;
import com.ekart.order.entity.Address;
import com.ekart.order.service.AddressService;

@Service
public class AddressServiceImpl implements AddressService {

	@Autowired
	private AddressRepository addressRepository;

	@Override
	public int addNewAddress(Address address) {
		Address address1 = addressRepository.save(address);
		return address1.getAddressId();
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

	@Override
	public String deleteByAddressId(int id) {
		addressRepository.deleteById(id);
		return "address deleted successfully";
	}

	@Override
	public List<Address> fetchByUserName(String userName) {
		List<Address> addressList = addressRepository.findByUserName(userName);
		return addressList;
	}

}
