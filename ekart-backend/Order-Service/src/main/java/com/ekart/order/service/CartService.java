package com.ekart.order.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.ekart.common.DTO.ProductCategories;
import com.ekart.order.entity.Cart;

@Service
public interface CartService {
	String saveItemsInCart(Cart cart);

	List<Cart> getAllCartItems();

	String removeCartItem(int id);

	Cart getByProductId(int productId);

	String removeCartByProductId(int productId);

	Cart getByProductCategoriesAndProductId(ProductCategories category, int productId);

	Cart getByCartId(int cartId);

	List<Cart> getByEmail(String email);

	Cart getByCartIdAndEmail(int id, String email);
}
