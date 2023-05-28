package com.ekart.inventory.serviceImplementation;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ekart.inventory.entity.FashionProducts;
import com.ekart.inventory.enums.FashionTypes;
import com.ekart.inventory.enums.Suitable;
import com.ekart.inventory.repository.FashionProductsRepository;
import com.ekart.inventory.service.FashionProductService;

@Service
public class FashionProductServiceImpl implements FashionProductService {

	@Autowired
	private FashionProductsRepository fashionProductsRepo;

	@Override
	public List<FashionProducts> loadFashionProducts() {
		List<FashionProducts> allFashionProducts = fashionProductsRepo.findAll();
		return allFashionProducts;
	}

	@Override
	public FashionProducts fetchById(int id) {
		FashionProducts product = fashionProductsRepo.findById(id).get();
		return product;
	}

	@Override
	public List<FashionProducts> fetchByType(FashionTypes type) {
		List<FashionProducts> products = fashionProductsRepo.findByType(type);
		return products;
	}

	@Override
	public FashionProducts fetchByProductTypeAndProductId(FashionTypes type, int productId) {
		FashionProducts product = fashionProductsRepo.findByTypeAndFashionId(type, productId);
		return product;
	}

	@Override
	public List<FashionProducts> GetFashionProductsBySuitable(Suitable suitable) {
		List<FashionProducts> fashionProducts = fashionProductsRepo.findBySuitablefor(suitable);
		return fashionProducts;
	}

	@Override
	public FashionProducts fetchBySuitableForAndProductId(Suitable suitable, int productId) {
		FashionProducts product = fashionProductsRepo.findBySuitableforAndFashionId(suitable, productId);
		return product;
	}

	@Override
	public List<FashionProducts> getFashionProductsByGenderWithTypes(Suitable suitable, FashionTypes type) {
		List<FashionProducts> fashionProducts = fashionProductsRepo.findBySuitableforAndType(suitable, type);
		return fashionProducts;
	}

	@Override
	public FashionProducts getFashionProductsByGenderWithTypesAndProductId(Suitable suitable, FashionTypes type,
			int productId) {
		FashionProducts product = fashionProductsRepo.findBySuitableforAndTypeAndFashionId(suitable, type, productId);
		return product;
	}

	@Override
	public String saveFashionProduct(FashionProducts fashionProduct) {
		fashionProductsRepo.save(fashionProduct);
		return "Item saved";
	}

	@Override
	public String deleteFashionProductById(int id) {
		fashionProductsRepo.deleteById(id);
		return "item deleted";
	}

	@Override
	public List<FashionProducts> GetFashionProductsBySellerName(String sellerName) {
		List<FashionProducts> fashionProducts = fashionProductsRepo.findBySellerName(sellerName);
		return fashionProducts;
	}

	@Override
	public String saveSellerFashionProducts(FashionProducts updateFashionProducts) {
		fashionProductsRepo.save(updateFashionProducts);
		return "seller fashion products saved";
	}
}
