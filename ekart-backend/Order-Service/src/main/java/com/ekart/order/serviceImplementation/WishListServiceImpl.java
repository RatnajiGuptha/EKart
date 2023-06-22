package com.ekart.order.serviceImplementation;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ekart.order.Repository.WishListRepository;
import com.ekart.order.entity.Wishlist;
import com.ekart.order.service.WishListService;

@Service
public class WishListServiceImpl implements WishListService {
    @Autowired
    private WishListRepository wishListRepository;

    @Override
    public String addItems(Wishlist wishlist) {
        wishListRepository.save(wishlist);
        return "Items added to wishlist";
    }

    @Override
    public List<Wishlist> getAllItemsInWishList() {
        return wishListRepository.findAll();
    }

    @Override
    public Wishlist getItemByProdId(int prodId) {
        return wishListRepository.findByProdId(prodId);
    }

    @Override
    public Wishlist getItemByProdIdAndType(int prodId, String inventory) {
        return wishListRepository.findByInventoryAndProdId(inventory, prodId);
    }


    @Override
    public String deleteItemById(int wishlistId) {
        wishListRepository.deleteById(wishlistId);
        return "Item deleted from wishList";
    }

    @Override
    public List<Wishlist> getItemByEmail(String email) {
        return wishListRepository.findByEmail(email);
    }
}
