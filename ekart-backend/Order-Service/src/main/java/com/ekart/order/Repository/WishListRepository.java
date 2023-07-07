package com.ekart.order.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ekart.order.entity.Wishlist;

public interface WishListRepository extends JpaRepository<Wishlist, Integer>{

	Wishlist findByProdId(int prodId);

	Wishlist findByInventoryAndProdId(String inventoryType, int prodId);

	List<Wishlist> findByEmail(String email);

}
