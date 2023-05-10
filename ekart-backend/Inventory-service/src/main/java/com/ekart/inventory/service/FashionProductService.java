package com.ekart.inventory.service;

import java.util.List;

import com.ekart.inventory.entity.FashionProducts;
import com.ekart.inventory.enums.FashionTypes;

import jakarta.transaction.Transactional;

public interface FashionProductService {

	public String saveFashionProduct(FashionProducts fashionProduct);

	public List<FashionProducts> loadFashionProducts();

	@Transactional
	public String deleteFashionProductById(int id);
	
	public List<FashionProducts> fetchByType(FashionTypes type);
}
