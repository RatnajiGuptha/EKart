package com.ekart.order.service;

import java.util.List;

import com.ekart.order.entity.Wishlist;

public interface WishListService {

	public String addItems(Wishlist wishlist);

	public List<Wishlist> getAllItemsInWishList();

	public Wishlist getItemByProdId(int prodId);

	public List<Wishlist> getItemByEmail(String email);

	public Wishlist getItemByProdIdAndType(int prodId, String inventoryType);

	public String deleteItemById(int wishlistId);

}
