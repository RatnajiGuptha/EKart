package com.ekart.inventory.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.ekart.inventory.entity.Cart;

@Service
public interface CartService {
    String saveItemsInCart(Cart cart);

    List<Cart> getAllCartItems();

    String removeCartItem(int id);

    Cart getByUserName(String userName);

    Cart getByProductId(int productId);
}
