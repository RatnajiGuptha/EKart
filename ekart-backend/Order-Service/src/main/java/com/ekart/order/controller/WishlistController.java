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
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ekart.order.entity.Wishlist;
import com.ekart.order.service.WishListService;

@RestController
@RequestMapping("/api/wishlist")
public class WishlistController {

	private static final Logger LOGGER = LoggerFactory.getLogger(WishlistController.class);

	@Autowired
	private WishListService wishListService;

	@PostMapping("/addToWishList")
	public ResponseEntity<String> addToWishList(@RequestBody Wishlist wishlist) {
		String Response = wishListService.addItems(wishlist);
		LOGGER.info("add products to wishlist");
		return ResponseEntity.status(HttpStatusCode.valueOf(200)).body(Response);
	}

	@GetMapping("/getAllItemsInWishList")
	public ResponseEntity<List<Wishlist>> fetchItemsInWishList() {
		List<Wishlist> wishlists = wishListService.getAllItemsInWishList();
		LOGGER.info("Returns products to wishlist");
		return ResponseEntity.status(HttpStatusCode.valueOf(201)).body(wishlists);
	}

	@GetMapping("/getItemByProdId/{prodId}")
	public ResponseEntity<Wishlist> fetchItemByProdId(@PathVariable int prodId) {
		Wishlist wishlist = wishListService.getItemByProdId(prodId);
		LOGGER.info("return the product by id {} in wishlist", prodId);
		return ResponseEntity.status(HttpStatusCode.valueOf(201)).body(wishlist);
	}

	@GetMapping("/getItemByEmail/{email}")
	public ResponseEntity<List<Wishlist>> fetchItemByUserName(@PathVariable String email) {
		List<Wishlist> wishlists = wishListService.getItemByEmail(email);
		LOGGER.info("return the product by eamil {} in wishlist", email);
		return ResponseEntity.status(HttpStatusCode.valueOf(201)).body(wishlists);
	}

	@GetMapping("/getItemByProdIdAndInventoryType/{inventory}/{prodId}")
	public ResponseEntity<Wishlist> fetchItemByProdIdAndType(@PathVariable String inventory, @PathVariable int prodId) {
		Wishlist wishlist = wishListService.getItemByProdIdAndType(prodId, inventory);
		LOGGER.info("return the product by ProdId And InventoryType {} in wishlist", inventory, prodId);
		return ResponseEntity.status(HttpStatusCode.valueOf(201)).body(wishlist);
	}

	@DeleteMapping("/deleteItemById/{wishlistId}")
	public ResponseEntity<String> deleteItemFromWishList(@PathVariable int wishlistId) {
		String response = wishListService.deleteItemById(wishlistId);
		LOGGER.info("delete product in whishlist by id {}", wishlistId);
		return ResponseEntity.status(HttpStatusCode.valueOf(200)).body(response);
	}

}
