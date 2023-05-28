package com.ekart.inventory.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ekart.inventory.entity.ElectronicsProducts;
import com.ekart.inventory.enums.ElectronicsTypes;

public interface ElectronicsRepository extends JpaRepository<ElectronicsProducts, Integer> {
	public List<ElectronicsProducts> findByType(ElectronicsTypes type);

	public List<ElectronicsProducts> findBySellerName(String sellerName);
}
