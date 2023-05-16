package com.ekart.inventory.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ekart.inventory.entity.Cart;

public interface CartRepository extends JpaRepository<Cart, Integer> {

    Cart findByUserName(String userName);
}
