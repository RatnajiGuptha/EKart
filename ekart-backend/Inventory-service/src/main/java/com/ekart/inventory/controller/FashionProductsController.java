package com.ekart.inventory.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.ekart.inventory.entity.FashionProducts;
import com.ekart.inventory.enums.FashionTypes;
import com.ekart.inventory.service.FashionProductService;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/fashionProducts")
public class FashionProductsController {

	@Autowired
	private FashionProductService fashionService;


	@PostMapping("/addMultipleProducts")
	public String addMultipleProduct(@RequestBody List<FashionProducts> fashionProducts) {

		for(FashionProducts  prods : fashionProducts) {
			String response = fashionService.saveFashionProduct(prods);
		}
		return "Multiple Items added";
	}
	
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
	
	@GetMapping("/getProducts/type/{type}")
	public List<FashionProducts> getFashionProductsByType(@PathVariable FashionTypes type){
		List<FashionProducts> fetchByTypes = fashionService.fetchByType(type);
		return fetchByTypes;
	}
	
}
