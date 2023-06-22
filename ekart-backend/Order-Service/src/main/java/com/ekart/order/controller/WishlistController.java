package com.ekart.order.controller;

import java.util.List;

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

    @Autowired
    private WishListService wishListService;

    @PostMapping("/addToWishList")
    public ResponseEntity<String> addToWishList(@RequestBody Wishlist wishlist){
        String Response = wishListService.addItems(wishlist);
        return  ResponseEntity.status(HttpStatusCode.valueOf(200)).body(Response);
    }

    @GetMapping("/getAllItemsInWishList")
    public ResponseEntity<List<Wishlist>> fetchItemsInWishList(){
        List<Wishlist> wishlists = wishListService.getAllItemsInWishList();
        return ResponseEntity.status(HttpStatusCode.valueOf(201)).body(wishlists);
    }

    @GetMapping("/getItemByProdId/{prodId}")
    public ResponseEntity<Wishlist> fetchItemByProdId(@PathVariable int prodId){
        Wishlist wishlist =  wishListService.getItemByProdId(prodId);

        return ResponseEntity.status(HttpStatusCode.valueOf(201)).body(wishlist);
    }

    @GetMapping("/getItemByEmail/{email}")
    public ResponseEntity<List<Wishlist>> fetchItemByUserName(@PathVariable String email){
        List<Wishlist> wishlists =  wishListService.getItemByEmail(email);

        return ResponseEntity.status(HttpStatusCode.valueOf(201)).body(wishlists);
    }

    @GetMapping("/getItemByProdIdAndInventoryType/{inventory}/{prodId}")
    public ResponseEntity<Wishlist> fetchItemByProdIdAndType( @PathVariable String inventory , @PathVariable int prodId){
        Wishlist wishlist =  wishListService.getItemByProdIdAndType(prodId, inventory);

        return ResponseEntity.status(HttpStatusCode.valueOf(201)).body(wishlist);
    }

    @DeleteMapping("/deleteItemById/{wishlistId}")
    public ResponseEntity<String> deleteItemFromWishList(@PathVariable int wishlistId){
        String response = wishListService.deleteItemById(wishlistId);
        return ResponseEntity.status(HttpStatusCode.valueOf(200)).body(response);
    }

}
