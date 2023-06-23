package com.ekart.inventory.serviceImplementation;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ekart.inventory.entity.FashionProducts;
import com.ekart.inventory.enums.FashionTypes;
import com.ekart.inventory.enums.Suitable;
import com.ekart.inventory.repository.FashionProductsRepository;
import com.ekart.inventory.service.FashionProductService;

import io.micrometer.observation.annotation.Observed;

@Service
public class FashionProductServiceImpl implements FashionProductService {

	@Autowired
	private FashionProductsRepository fashionProductsRepo;

	@Override
	@Observed(name="get.fashionProducts")
	public List<FashionProducts> loadFashionProducts() {
		List<FashionProducts> allFashionProducts = fashionProductsRepo.findAll();
		return allFashionProducts;
	}

	@Override
	@Observed(name="get.fashionProductById")
	public FashionProducts fetchById(int id) {
		FashionProducts product = fashionProductsRepo.findById(id).get();
		return product;
	}

	@Override
	@Observed(name="get.fashionProductByType")
	public List<FashionProducts> fetchByType(FashionTypes type) {
		List<FashionProducts> products = fashionProductsRepo.findByType(type);
		return products;
	}

	@Override
	@Observed(name="get.fashionProductByTypeAndId")
	public FashionProducts fetchByProductTypeAndProductId(FashionTypes type, int productId) {
		FashionProducts product = fashionProductsRepo.findByTypeAndFashionId(type, productId);
		return product;
	}

	@Override
	@Observed(name="get.fashionProductsBySuitable")
	public List<FashionProducts> GetFashionProductsBySuitable(Suitable suitable) {
		List<FashionProducts> fashionProducts = fashionProductsRepo.findBySuitablefor(suitable);
		return fashionProducts;
	}

	@Override
	@Observed(name="get.fashionProductBySuitableAndId")
	public FashionProducts fetchBySuitableForAndProductId(Suitable suitable, int productId) {
		FashionProducts product = fashionProductsRepo.findBySuitableforAndFashionId(suitable, productId);
		return product;
	}

	@Override
	@Observed(name="get.fashionProductsBySuitableAndType")
	public List<FashionProducts> getFashionProductsByGenderWithTypes(Suitable suitable, FashionTypes type) {
		List<FashionProducts> fashionProducts = fashionProductsRepo.findBySuitableforAndType(suitable, type);
		return fashionProducts;
	}

	@Override
	@Observed(name="get.fashionProductBySuitableWithTypeAndId")
	public FashionProducts getFashionProductsByGenderWithTypesAndProductId(Suitable suitable, FashionTypes type,
			int productId) {
		FashionProducts product = fashionProductsRepo.findBySuitableforAndTypeAndFashionId(suitable, type, productId);
		return product;
	}

	@Override
	@Observed(name="add.fashionProducts")
	public String saveFashionProduct(FashionProducts fashionProduct) {
		fashionProductsRepo.save(fashionProduct);
		return "Item saved";
	}

	@Override
	@Observed(name="delete.fashionProductsById")
	public String deleteFashionProductById(int id) {
		fashionProductsRepo.deleteById(id);
		return "item deleted";
	}

	@Override
	@Observed(name="get.fashionProductsBySellerName")
	public List<FashionProducts> GetFashionProductsBySellerName(String sellerName) {
		List<FashionProducts> fashionProducts = fashionProductsRepo.findBySellerName(sellerName);
		return fashionProducts;
	}

	@Override
	@Observed(name="update.SellerFashionProducts")
	public String saveSellerFashionProducts(FashionProducts updateFashionProducts) {
		fashionProductsRepo.save(updateFashionProducts);
		return "seller fashion products saved";
	}
	
	@Override
	@Observed(name="get.fashionProductsBySellerNameAndType")
	public List<FashionProducts> GetFashionProductsBySellerNameAndType(String sellerName, FashionTypes type) {
		List<FashionProducts>fashionProducts=fashionProductsRepo.findBySellerNameAndType(sellerName,type);
		return fashionProducts;
	}

	@Override
	public FashionProducts GetFashionProductsBySuitable(int id) {
		// TODO Auto-generated method stub
		return fashionProductsRepo.findById(id).get();
	}
}
