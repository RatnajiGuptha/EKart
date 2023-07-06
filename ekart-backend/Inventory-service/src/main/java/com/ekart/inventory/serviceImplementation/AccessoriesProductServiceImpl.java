package com.ekart.inventory.serviceImplementation;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ekart.inventory.entity.AccessoriesProducts;
import com.ekart.inventory.enums.AccessoriesTypes;
import com.ekart.inventory.enums.Suitable;
import com.ekart.inventory.repository.AccessoriesProductsRepository;
import com.ekart.inventory.service.AccessoriesProductService;

import io.micrometer.observation.annotation.Observed;

@Service
public class AccessoriesProductServiceImpl implements AccessoriesProductService {

	@Autowired
	private AccessoriesProductsRepository accessoriesRepo;

	@Override
	@Observed(name="add.accessoriesProducts")
	public AccessoriesProducts saveAccessoriesProducts(AccessoriesProducts accessoriesProducts) {
		return accessoriesRepo.save(accessoriesProducts);

	}

	@Override
	@Observed(name="get.accessoriesProducts")
	public List<AccessoriesProducts> getAccessoriesProducts() {
		List<AccessoriesProducts> allAccessoryProduct = accessoriesRepo.findAll();
		return allAccessoryProduct;
	}

	@Override
	@Observed(name="get.accessoriesProductById")
	public AccessoriesProducts getAccessoriesProductById(int id) {
		AccessoriesProducts accessoriesProduct = accessoriesRepo.findById(id).get();
		return accessoriesProduct;
	}

	@Override
	@Observed(name="get.accessoriesProductsByType")
	public List<AccessoriesProducts> getAccessoriesProductsByType(AccessoriesTypes type) {
		List<AccessoriesProducts> accessoriesProducts = accessoriesRepo.findByType(type);
		return accessoriesProducts;
	}

	@Override
	@Observed(name="get.accessoriesProductsBySuitable")
	public List<AccessoriesProducts> GetAccessoriesProductsBySuitable(Suitable suitable) {
		List<AccessoriesProducts> accessoriesProducts = accessoriesRepo.findBySuitablefor(suitable);
		return accessoriesProducts;
	}

	@Override
	@Observed(name="get.accessoriesProductByTypeAndId")
	public AccessoriesProducts getAccessoriesByTpeAndProductById(AccessoriesTypes type, int accessoryId) {
		AccessoriesProducts product = accessoriesRepo.findByTypeAndAccessoryId(type, accessoryId);
		return product;
	}

	@Override
	@Observed(name="get.accessoriesProductBySellername")
	public List<AccessoriesProducts> GetAccessoriesProductsBySellerName(String sellerName) {
		List<AccessoriesProducts> accessoriesProducts=accessoriesRepo.findBySellerName(sellerName);
		return accessoriesProducts;
	}

	@Override
	@Observed(name="update.sellerAccessoriesProducts")
	public String saveSellerAccessoriesProducts(AccessoriesProducts updateAccessoriesProducts) {
		accessoriesRepo.save(updateAccessoriesProducts);
		return "seller accessroies products saved";
	}
	
	@Override
	@Observed(name="get.accessoriesProductsBySellernameAndType")
	public List<AccessoriesProducts> GetAccessoriesProductsBySellerNameAndType(String sellerName,
			AccessoriesTypes type) {
		List<AccessoriesProducts> accessoriesProducts=accessoriesRepo.findBySellerNameAndType(sellerName,type);
		return accessoriesProducts;
	}
	
	

}
