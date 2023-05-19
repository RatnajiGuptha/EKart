package com.ekart.order.controller;

import java.util.List;

import com.ekart.common.DTO.ProductCategories;
import com.ekart.order.entity.Cart;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.ekart.order.service.CartService;


@CrossOrigin("http://localhost:3000/")
@RestController
@RequestMapping("/api/cart")
public class CartController {

    @Autowired
    private CartService cartService;
    @PostMapping("/add")
    public ResponseEntity<String> SaveItems(@RequestBody Cart cart){

        String items = cartService.saveItemsInCart(cart);
        return  ResponseEntity.status(HttpStatusCode.valueOf(201)).body(items);
    }

    @GetMapping("/getProducts")
    public ResponseEntity<List<Cart>> getAllCart(){
        List<Cart> cartList = cartService.getAllCartItems();
        return ResponseEntity.status(HttpStatusCode.valueOf(200)).body(cartList);
    }

    @DeleteMapping("/deleteProductInCart/{id}")
    public ResponseEntity<String> deleteCartItem(@PathVariable int id){
        String response = cartService.removeCartItem(id);
        return ResponseEntity.status(HttpStatusCode.valueOf(201)).body(response);
    }

    @GetMapping("/getByUserName/{userName}")
    public ResponseEntity<List<Cart>> fetchCartByUserName(@PathVariable String userName){
        List<Cart> cartList = cartService.getByUserName(userName);
        return ResponseEntity.status(HttpStatusCode.valueOf(200)).body(cartList);
    }

    @GetMapping("/getByProductId/{productId}")
    public ResponseEntity<Cart> fetchCartByProdId(@PathVariable int productId){
        Cart cart = cartService.getByProductId(productId);
        return ResponseEntity.status(HttpStatusCode.valueOf(200)).body(cart);
    }

    @GetMapping("/getByProductId&Category/{productId}/{category}")
    public ResponseEntity<Cart> fetchCartByUserName(@PathVariable int productId, @PathVariable ProductCategories category){
        Cart cart = cartService.getByProductIdAndCategorie(productId, category);
        return ResponseEntity.status(HttpStatusCode.valueOf(200)).body(cart);
    }
    @DeleteMapping("/deleteProductInCartByProductId/{productId}")
    public ResponseEntity<String> deleteCartItemByProduct(@PathVariable int productId){
        String response = cartService.removeCartByProductId(productId);
        return ResponseEntity.status(HttpStatusCode.valueOf(201)).body(response);
    }
}