package com.ekart.inventory.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ekart.inventory.entity.Toys;

public interface ToysRepository extends JpaRepository<Toys,Integer> {

	List<Toys> findToyBySellerName(String sellerName);
}
