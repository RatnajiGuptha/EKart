package com.ekart.inventory.service;

import java.util.List;

import com.ekart.inventory.entity.FashionProducts;

import jakarta.transaction.Transactional;

public interface FashionProductService {

	public String saveFashionProduct(FashionProducts fashionProduct);

	public List<FashionProducts> loadFashionProducts();

	@Transactional
	public String deleteFashionProductById(int id);
}
