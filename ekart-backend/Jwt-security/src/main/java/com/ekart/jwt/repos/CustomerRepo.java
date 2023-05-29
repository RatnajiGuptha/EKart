package com.ekart.jwt.repos;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ekart.jwt.entity.CustomerEntity;

public interface CustomerRepo extends JpaRepository<CustomerEntity, Integer> {

	Optional<CustomerEntity> findByUserName(String userName);

	Optional<CustomerEntity> findByEmail(String email);

	Optional<CustomerEntity> findByContactNumber(String contactNumber);

}
