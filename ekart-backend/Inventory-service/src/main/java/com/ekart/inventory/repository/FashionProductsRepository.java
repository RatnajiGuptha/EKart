package com.ekart.inventory.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ekart.inventory.entity.FashionProducts;
import com.ekart.inventory.enums.FashionTypes;
import com.ekart.inventory.enums.Suitable;

public interface FashionProductsRepository extends JpaRepository<FashionProducts, Integer> {

	public List<FashionProducts> findByType(FashionTypes types);

	public List<FashionProducts> findBySuitablefor(Suitable suitable);

	public List<FashionProducts> findBySuitableforAndType(Suitable suitable, FashionTypes type);

	public FashionProducts findByTypeAndFashionId(FashionTypes type, int productId);

	public FashionProducts findBySuitableforAndFashionId(Suitable suitable, int productId);

	public FashionProducts findBySuitableforAndTypeAndFashionId(Suitable suitable, FashionTypes type, int productId);

	public List<FashionProducts> findBySellerName(String sellerName);
}
