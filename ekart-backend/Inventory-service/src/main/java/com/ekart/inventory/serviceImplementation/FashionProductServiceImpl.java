package com.ekart.inventory.serviceImplementation;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ekart.inventory.entity.FashionProducts;
import com.ekart.inventory.enums.FashionTypes;
import com.ekart.inventory.repository.FashionProductsRepository;
import com.ekart.inventory.service.FashionProductService;

@Service
public class FashionProductServiceImpl implements FashionProductService {

	@Autowired
	private FashionProductsRepository fashionProductsRepo;

	@Override
	public String saveFashionProduct(FashionProducts fashionProduct) {
		fashionProductsRepo.save(fashionProduct);
		return "Item saved";
	}

	@Override
	public List<FashionProducts> loadFashionProducts() {
		List<FashionProducts> allFashionProducts = fashionProductsRepo.findAll();
		return allFashionProducts;
	}

	@Override
	public String deleteFashionProductById(int id) {
		fashionProductsRepo.deleteById(id);
		return "item deleted";
	}

	@Override
	public List<FashionProducts> fetchByType(FashionTypes type) {
		List<FashionProducts> products = fashionProductsRepo.findByType(type);
		return products;
	}

	@Override
	public FashionProducts fetchById(int id) {
		FashionProducts product = fashionProductsRepo.findById(id).get();
		return product;
	}



}
