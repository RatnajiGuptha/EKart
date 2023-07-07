package com.ekart.jwt.security;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

import com.ekart.jwt.entity.CustomerEntity;
import com.ekart.jwt.repos.CustomerRepo;

@Component
public class CustomerDetailsService implements UserDetailsService {

	@Autowired
	private CustomerRepo customerRepo;

	@Override
	public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
		Optional<CustomerEntity> findUser = customerRepo.findByEmail(email);

		return findUser.map(CustomerDetailsInfo::new)
				.orElseThrow(() -> new UsernameNotFoundException("User not found " + email));
	}

}
