package com.ekart.inventory.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ekart.inventory.entity.FashionProducts;
import com.ekart.inventory.enums.FashionTypes;

public interface FashionProductsRepository extends JpaRepository<FashionProducts, Integer>  {

	public List<FashionProducts> findByType(FashionTypes types);
	
}
