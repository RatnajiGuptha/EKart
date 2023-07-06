package com.ekart.order.controller;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ekart.common.DTO.ProductCategories;
import com.ekart.order.entity.Cart;
import com.ekart.order.service.CartService;

@RestController
@RequestMapping("/api/cart")
public class CartController {

	private static final Logger LOGGER = LoggerFactory.getLogger(CartController.class);

	@Autowired
	private CartService cartService;

	@GetMapping("/getProducts")
	public ResponseEntity<List<Cart>> getAllCart() {
		List<Cart> cartList = cartService.getAllCartItems();
		LOGGER.info("Returning products from cart");
		return ResponseEntity.status(HttpStatusCode.valueOf(200)).body(cartList);
	}

	@GetMapping("/getByProductId/{productId}")
	public ResponseEntity<Cart> fetchCartByProdId(@PathVariable int productId) {
		Cart cart = cartService.getByProductId(productId);
		LOGGER.info("Returning products from cart by id {}", productId);
		return ResponseEntity.status(HttpStatusCode.valueOf(200)).body(cart);
	}

	@GetMapping("/getProductCategoryAndProductId/{category}/{productId}")
	public Cart fetchData(@PathVariable ProductCategories category, @PathVariable int productId) {
		LOGGER.info("Returning products by category {} and id {}", category, productId);
		return cartService.getByProductCategoriesAndProductId(category, productId);
	}

	@PostMapping("/add")
	public ResponseEntity<String> SaveItems(@RequestBody Cart cart) {
		String items = cartService.saveItemsInCart(cart);
		LOGGER.info("Adding items into cart");
		return ResponseEntity.status(HttpStatusCode.valueOf(201)).body(items);
	}

	@PostMapping("/addMutlipleProducts")
	public ResponseEntity<?> saveMultipleProductsToCart(@RequestBody List<Cart> cartsProductsList) {

		for (Cart c : cartsProductsList) {
			cartService.saveItemsInCart(c);
		}
		LOGGER.info("Adding multiple items into cart");
		return ResponseEntity.status(HttpStatusCode.valueOf(201)).body("Mutliple products added into cart");

	}

	@DeleteMapping("/deleteProductInCartByProductId/{productId}")
	public ResponseEntity<String> deleteCartItemByProduct(@PathVariable int productId) {
		String response = cartService.removeCartByProductId(productId);
		LOGGER.info("Deleting the item with product id {}", productId);
		return ResponseEntity.status(HttpStatusCode.valueOf(201)).body(response);
	}

	@DeleteMapping("/DeleteAllItemsInCart")
	public ResponseEntity<String> deleteAllCartItems() {
		List<Cart> cartList = cartService.getAllCartItems();

		for (Cart cart : cartList) {
			cartService.removeCartItem(cart.getCartId());
		}
		LOGGER.info("Delete all items in cart");
		return ResponseEntity.status(HttpStatusCode.valueOf(201)).body("Deleted elements of cart");
	}

	@DeleteMapping("/deleteProductInCart/{id}")
	public ResponseEntity<String> deleteCartItem(@PathVariable int id) {
		String response = cartService.removeCartItem(id);
		LOGGER.info("Delete the item in cart by id {}", id);
		return ResponseEntity.status(HttpStatusCode.valueOf(201)).body(response);
	}

	@GetMapping("/getByEmail/{email}")
	public ResponseEntity<List<Cart>> fetchCartByEmail(@PathVariable String email) {
		List<Cart> cartList = cartService.getByEmail(email);
		LOGGER.info("Returning all products in cart by email {}", email);
		return ResponseEntity.status(HttpStatusCode.valueOf(200)).body(cartList);
	}

	@PutMapping("/{id}/{email}/{qty}")
	public ResponseEntity<Cart> fetchDataByQtyAndCategoryAndEmail(@PathVariable int id, @PathVariable String email,
			@PathVariable int qty) {

		Cart cart = cartService.getByCartIdAndEmail(id, email);
		cart.setQty(qty);
		cartService.saveItemsInCart(cart);
		LOGGER.info("Updating the products {} qty in cart by", qty);
		return ResponseEntity.status(HttpStatusCode.valueOf(201)).body(cart);

	}
	@GetMapping("/getByCart/{cartId}")
	public ResponseEntity<Cart> fetchCartByCartId(@PathVariable int cartId) {
		Cart cart = cartService.getByCartId(cartId);
		LOGGER.info("Returning products from cart by id {}", cartId);
		return ResponseEntity.status(HttpStatusCode.valueOf(200)).body(cart);
	}

}
