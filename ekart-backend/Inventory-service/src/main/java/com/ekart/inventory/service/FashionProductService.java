package com.ekart.inventory.service;

import java.util.List;

import com.ekart.inventory.entity.FashionProducts;
import com.ekart.inventory.entity.FootWear;
import com.ekart.inventory.enums.FashionTypes;
import com.ekart.inventory.enums.Suitable;

import jakarta.transaction.Transactional;

public interface FashionProductService {

	public String saveFashionProduct(FashionProducts fashionProduct);

	public List<FashionProducts> loadFashionProducts();

	@Transactional
	public String deleteFashionProductById(int id);
	
	public List<FashionProducts> fetchByType(FashionTypes type);
	
	public FashionProducts fetchById(int id);
	
	public List<FashionProducts> GetFashionProductsBySuitable(Suitable suitable);
}
