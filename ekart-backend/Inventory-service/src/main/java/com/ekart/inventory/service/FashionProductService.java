package com.ekart.inventory.service;

import java.util.List;

import com.ekart.inventory.entity.FashionProducts;
import com.ekart.inventory.enums.FashionTypes;
import com.ekart.inventory.enums.Suitable;

import jakarta.transaction.Transactional;

public interface FashionProductService {

	public List<FashionProducts> loadFashionProducts();

	public FashionProducts fetchById(int id);

	public List<FashionProducts> fetchByType(FashionTypes type);

	public FashionProducts fetchByProductTypeAndProductId(FashionTypes type, int productId);

	public List<FashionProducts> GetFashionProductsBySuitable(Suitable suitable);

	public FashionProducts fetchBySuitableForAndProductId(Suitable suitable, int productId);

	public List<FashionProducts> getFashionProductsByGenderWithTypes(Suitable suitable, FashionTypes type);

	public FashionProducts getFashionProductsByGenderWithTypesAndProductId(Suitable suitable, FashionTypes type,
			int productId);

	public String saveFashionProduct(FashionProducts fashionProduct);

	@Transactional
	public String deleteFashionProductById(int id);

}
