package com.ekart.order.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ekart.order.entity.Address;

public interface AddressRepository extends JpaRepository<Address, Integer>{
	
	public Address findByReceiverName(String receiverName);
	
	public List<Address> findByUserName(String username);
}
