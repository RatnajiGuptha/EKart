package com.ekart.inventory.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ekart.inventory.entity.AccessoriesProducts;
import com.ekart.inventory.enums.AccessoriesTypes;
import com.ekart.inventory.enums.Suitable;

public interface AccessoriesProductsRepository extends JpaRepository<AccessoriesProducts, Integer> {

	public List<AccessoriesProducts> findByType(AccessoriesTypes type);

	public List<AccessoriesProducts> findBySuitablefor(Suitable suitable);

	public AccessoriesProducts findByTypeAndAccessoryId(AccessoriesTypes type, int accessoryId);

	public List<AccessoriesProducts> findBySellerName(String sellerName);

	public List<AccessoriesProducts> findBySellerNameAndType(String sellerName, AccessoriesTypes type);
}
