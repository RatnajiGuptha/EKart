package com.ekart.order.serviceImplementation;

import java.util.List;

import com.ekart.common.DTO.ProductCategories;
import com.ekart.order.Repository.CartRepository;
import com.ekart.order.entity.Cart;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.ekart.order.service.CartService;

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

    @Override
    public List<Cart> getByUserName(String userName) {
        return cartRepository.findByUserName(userName);
    }

    @Override
    public Cart getByProductId(int productId) {
        return cartRepository.findByProductId(productId);
    }

    @Override
    public String removeCartByProductId(int productId) {
        Cart cart = cartRepository.findByProductId(productId);
        int Id = cart.getCartId();
        cartRepository.deleteById(Id);

        return "Item Removed From cart";
    }


//    @Override
//    public Cart getByProductIdAndCategorie(int productId, ProductCategories category) {
//        return cartRepository.findByProductIdAndProductCategories(productId,category);
//    }

	@Override
	public Cart getByProductCategoriesAndProductId(ProductCategories category, int productId) {
		return cartRepository.findByProductCategoriesAndProductId(category, productId);
	}

	@Override
	public Cart getByCartIdAndUserName(int id,String userName) {
		return cartRepository.findByCartIdAndUserName(id,userName);
	}

	
}
