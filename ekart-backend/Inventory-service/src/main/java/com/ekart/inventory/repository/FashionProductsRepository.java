package com.ekart.inventory.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ekart.inventory.entity.FashionProducts;

public interface FashionProductsRepository extends JpaRepository<FashionProducts, Integer>  {

}
