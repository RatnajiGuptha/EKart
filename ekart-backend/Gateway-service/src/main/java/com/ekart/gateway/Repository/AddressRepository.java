package com.ekart.gateway.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ekart.gateway.entity.Address;

public interface AddressRepository extends JpaRepository<Address, Integer>{
	
	public Address findByReceiverName(String receiverName);
}
