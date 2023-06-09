package com.ekart.inventory.service;

import java.util.List;

import com.ekart.inventory.entity.AccessoriesProducts;
import com.ekart.inventory.enums.AccessoriesTypes;
import com.ekart.inventory.enums.Suitable;

public interface AccessoriesProductService {

	public AccessoriesProducts saveAccessoriesProducts(AccessoriesProducts accessoriesProducts);

	public List<AccessoriesProducts> getAccessoriesProducts();

	public AccessoriesProducts getAccessoriesProductById(int id);

	public List<AccessoriesProducts> getAccessoriesProductsByType(AccessoriesTypes type);

	public List<AccessoriesProducts> GetAccessoriesProductsBySuitable(Suitable suitable);

	public AccessoriesProducts getAccessoriesByTpeAndProductById(AccessoriesTypes type, int accessoryId);

	public List<AccessoriesProducts> GetAccessoriesProductsBySellerName(String sellerName);

	public String saveSellerAccessoriesProducts(AccessoriesProducts updateAccessoriesProducts);

	public List<AccessoriesProducts> GetAccessoriesProductsBySellerNameAndType(String sellerName,
			AccessoriesTypes type);
}
