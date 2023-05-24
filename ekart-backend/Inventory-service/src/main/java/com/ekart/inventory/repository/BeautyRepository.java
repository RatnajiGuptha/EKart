package com.ekart.inventory.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ekart.inventory.entity.Beauty;

public interface BeautyRepository extends JpaRepository<Beauty,Integer>{

	List<Beauty> findBeautyBySellerName(String sellerName);

}
