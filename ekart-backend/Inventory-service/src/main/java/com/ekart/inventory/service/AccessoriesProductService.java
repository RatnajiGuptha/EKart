package com.ekart.inventory.service;

import java.util.List;

import com.ekart.inventory.entity.AccessoriesProducts;
import com.ekart.inventory.enums.AccessoriesTypes;

public interface AccessoriesProductService {

	public void saveAccessoriesProducts(AccessoriesProducts accessoriesProducts);
	public List<AccessoriesProducts> getAccessoriesProducts();
	public AccessoriesProducts getAccessoriesProductById(int id);
	public List<AccessoriesProducts> getAccessoriesProductsByType(AccessoriesTypes type);
}
