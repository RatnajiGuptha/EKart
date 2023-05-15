package com.ekart.inventory.service;

import com.ekart.inventory.entity.Cart;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface CartService {
    String saveItemsInCart(Cart cart);

    List<Cart> getAllCartItems();

    String removeCartItem(int id);
}
