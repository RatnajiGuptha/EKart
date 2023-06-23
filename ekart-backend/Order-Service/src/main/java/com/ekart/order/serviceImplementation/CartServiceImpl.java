package com.ekart.order.serviceImplementation;

import java.util.List;

import com.ekart.common.DTO.ProductCategories;
import com.ekart.order.Repository.CartRepository;
import com.ekart.order.entity.Cart;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.ekart.order.service.CartService;

import io.micrometer.observation.annotation.Observed;

@Service
public class CartServiceImpl implements CartService {

    @Autowired
    private CartRepository cartRepository;
    @Override
    @Observed(name="add.itemsToCart")
    public String saveItemsInCart(Cart cart) {
        cartRepository.save(cart);
        return "Item added in cart";
    }

    @Override
    @Observed(name="get.itemsFromCart")
    public List<Cart> getAllCartItems() {
        return cartRepository.findAll();
    }

    @Override
    @Observed(name="remove.itemsFromCart")
    public String removeCartItem(int id) {
        cartRepository.deleteById(id);
        return "Item deleted from cart";
    }

   

    @Override
    @Observed(name="get.itemsFromCartById")
    public Cart getByProductId(int productId) {
        return cartRepository.findByProductId(productId);
    }

    @Override
    @Observed(name="remove.itemsFromCartById")
    public String removeCartByProductId(int productId) {
        Cart cart = cartRepository.findByProductId(productId);
        int Id = cart.getCartId();
        cartRepository.deleteById(Id);

        return "Item Removed From cart";
    }




	@Override
	@Observed(name="get.itemsFromCartByCategoryAndId")
	public Cart getByProductCategoriesAndProductId(ProductCategories category, int productId) {
		return cartRepository.findByProductCategoriesAndProductId(category, productId);
	}

	
	@Override
	@Observed(name="get.itemsFromCartByEmail")
	public List<Cart> getByEmail(String email) {
		// TODO Auto-generated method stub
		return cartRepository.findByEmail(email);
	}

	@Override
	@Observed(name="get.itemsFromCartByIdAndEmail")
	public Cart getByCartIdAndEmail(int id, String email) {
		// TODO Auto-generated method stub
		return cartRepository.findByCartIdAndEmail(id,email);
	}

	
}
