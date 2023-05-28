package com.ekart.order.controller;

import java.util.List;

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

//@CrossOrigin("*")
@RestController
@RequestMapping("/api/cart")
public class CartController {

	@Autowired
	private CartService cartService;

	@GetMapping("/getProducts")
	public ResponseEntity<List<Cart>> getAllCart() {
		List<Cart> cartList = cartService.getAllCartItems();
		return ResponseEntity.status(HttpStatusCode.valueOf(200)).body(cartList);
	}

	@GetMapping("/getByUserName/{userName}")
	public ResponseEntity<List<Cart>> fetchCartByUserName(@PathVariable String userName) {
		List<Cart> cartList = cartService.getByUserName(userName);
		return ResponseEntity.status(HttpStatusCode.valueOf(200)).body(cartList);
	}

	@GetMapping("/getByProductId/{productId}")
	public ResponseEntity<Cart> fetchCartByProdId(@PathVariable int productId) {
		Cart cart = cartService.getByProductId(productId);
		return ResponseEntity.status(HttpStatusCode.valueOf(200)).body(cart);
	}

	@GetMapping("/getProductCategoryAndProductId/{category}/{productId}")
	public Cart fetchData(@PathVariable ProductCategories category, @PathVariable int productId) {
		return cartService.getByProductCategoriesAndProductId(category, productId);
	}

	@PostMapping("/add")
	public ResponseEntity<String> SaveItems(@RequestBody Cart cart) {

		String items = cartService.saveItemsInCart(cart);
		return ResponseEntity.status(HttpStatusCode.valueOf(201)).body(items);
	}

	@PostMapping("/addMutlipleProducts")
	public ResponseEntity<?> saveMultipleProductsToCart(@RequestBody List<Cart> cartsProductsList) {

		for (Cart c : cartsProductsList) {
			cartService.saveItemsInCart(c);
		}
		return ResponseEntity.status(HttpStatusCode.valueOf(201)).body("Mutliple products added into cart");

	}

	@PutMapping("/{id}/{userName}/{qty}")
	public ResponseEntity<Cart> fetchDataByQtyAndCategoryAndUserName(@PathVariable int id,
			@PathVariable String userName, @PathVariable int qty) {

		Cart cart = cartService.getByCartIdAndUserName(id, userName);
		cart.setQty(qty);
		cartService.saveItemsInCart(cart);

		return ResponseEntity.status(HttpStatusCode.valueOf(201)).body(cart);

	}

	@DeleteMapping("/deleteProductInCartByProductId/{productId}")
	public ResponseEntity<String> deleteCartItemByProduct(@PathVariable int productId) {
		String response = cartService.removeCartByProductId(productId);
		return ResponseEntity.status(HttpStatusCode.valueOf(201)).body(response);
	}

	@DeleteMapping("/DeleteAllItemsInCart")
	public ResponseEntity<String> deleteAllCartItems() {
		List<Cart> cartList = cartService.getAllCartItems();

		for (Cart cart : cartList) {
			cartService.removeCartItem(cart.getCartId());
		}
		return ResponseEntity.status(HttpStatusCode.valueOf(201)).body("Deleted elements of cart");
	}

	@DeleteMapping("/deleteProductInCart/{id}")
	public ResponseEntity<String> deleteCartItem(@PathVariable int id) {
		String response = cartService.removeCartItem(id);
		return ResponseEntity.status(HttpStatusCode.valueOf(201)).body(response);
	}

}
