package com.ekart.inventory.serviceImplementation;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ekart.inventory.entity.Cart;
import com.ekart.inventory.repository.CartRepository;
import com.ekart.inventory.service.CartService;

@Service
public class CartServiceImpl implements CartService {

    @Autowired
    private CartRepository cartRepository;
    @Override
    public String saveItemsInCart(Cart cart) {
        cartRepository.save(cart);
        return "Item added in cart";
    }

    @Override
    public List<Cart> getAllCartItems() {
        return cartRepository.findAll();
    }

    @Override
    public String removeCartItem(int id) {
        cartRepository.deleteById(id);
        return "Item deleted from cart";
    }
}
