package com.ekart.inventory.serviceImplementation;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ekart.inventory.entity.AccessoriesProducts;
import com.ekart.inventory.enums.AccessoriesTypes;
import com.ekart.inventory.enums.Suitable;
import com.ekart.inventory.repository.AccessoriesProductsRepository;
import com.ekart.inventory.service.AccessoriesProductService;

@Service
public class AccessoriesProductServiceImpl implements AccessoriesProductService {

	@Autowired
	private AccessoriesProductsRepository accessoriesRepo;

	@Override
	public void saveAccessoriesProducts(AccessoriesProducts accessoriesProducts) {
		accessoriesRepo.save(accessoriesProducts);

	}

	@Override
	public List<AccessoriesProducts> getAccessoriesProducts() {
		List<AccessoriesProducts> allAccessoryProduct = accessoriesRepo.findAll();
		return allAccessoryProduct;
	}

	@Override
	public AccessoriesProducts getAccessoriesProductById(int id) {
		AccessoriesProducts accessoriesProduct = accessoriesRepo.findById(id).get();
		return accessoriesProduct;
	}

	@Override
	public List<AccessoriesProducts> getAccessoriesProductsByType(AccessoriesTypes type) {
		List<AccessoriesProducts> accessoriesProducts = accessoriesRepo.findByType(type);
		return accessoriesProducts;
	}

	@Override
	public List<AccessoriesProducts> GetAccessoriesProductsBySuitable(Suitable suitable) {
		List<AccessoriesProducts> accessoriesProducts = accessoriesRepo.findBySuitablefor(suitable);
		return accessoriesProducts;
	}

	@Override
	public AccessoriesProducts getAccessoriesByTpeAndProductById(AccessoriesTypes type, int accessoryId) {
		AccessoriesProducts product = accessoriesRepo.findByTypeAndAccessoryId(type, accessoryId);
		return product;
	}

	@Override
	public List<AccessoriesProducts> GetAccessoriesProductsBySellerName(String sellerName) {
		List<AccessoriesProducts> accessoriesProducts=accessoriesRepo.findBySellerName(sellerName);
		return accessoriesProducts;
	}

	@Override
	public String saveSellerAccessoriesProducts(AccessoriesProducts updateAccessoriesProducts) {
		accessoriesRepo.save(updateAccessoriesProducts);
		return "seller accessroies products saved";
	}
	
	

}
