package com.ekart.inventory.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.ekart.inventory.entity.FashionProducts;

public interface FashionProductService {

	public String saveFashionProduct(FashionProducts fashionProduct);
	public List<FashionProducts> loadFashionProducts();
	public String deleteFashionProductById(int id);
}
