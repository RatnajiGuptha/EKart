package com.ekart.inventory.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ekart.inventory.entity.FashionProducts;
import com.ekart.inventory.service.FashionProductService;

@RestController
@RequestMapping("/api/fashionProducts")
public class FashionProductsController {

	@Autowired
	private FashionProductService fashionService;
	
	@PostMapping("/add")
	public String addFashionProduct(@RequestBody FashionProducts fashionProducts) {
		String response =fashionService.saveFashionProduct(fashionProducts);
		return response;
	}
	
	@GetMapping("/getProducts")
	public List<FashionProducts> getFashionProducts(){
		List<FashionProducts> fashionProduct = fashionService.loadFashionProducts();
		return fashionProduct;
	}
	
}
