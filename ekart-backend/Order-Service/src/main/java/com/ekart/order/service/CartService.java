package com.ekart.order.service;

import java.util.List;

import com.ekart.order.entity.Cart;
import com.ekart.order.enums.ProductCategories;
import org.springframework.stereotype.Service;



@Service
public interface CartService {
    String saveItemsInCart(Cart cart);

    List<Cart> getAllCartItems();

    String removeCartItem(int id);

    Cart getByUserName(String userName);

    Cart getByProductId(int productId);

    String removeCartByProductId(int productId);

    Cart getByProductIdAndCategorie(int productId, ProductCategories categorie);
}
