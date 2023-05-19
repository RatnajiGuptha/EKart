package com.ekart.order.service;

import java.util.List;

import com.ekart.common.DTO.ProductCategories;
import com.ekart.order.entity.Cart;
import org.springframework.stereotype.Service;

import com.ekart.order.entity.Cart;

@Service
public interface CartService {
	String saveItemsInCart(Cart cart);

	List<Cart> getAllCartItems();

	String removeCartItem(int id);

    List<Cart> getByUserName(String userName);

	Cart getByProductId(int productId);

	String removeCartByProductId(int productId);

	Cart getByProductCategoriesAndProductId(ProductCategories category, int productId);
}
