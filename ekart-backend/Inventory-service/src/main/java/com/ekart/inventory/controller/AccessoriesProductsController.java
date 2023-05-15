package com.ekart.inventory.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ekart.inventory.entity.AccessoriesProducts;
import com.ekart.inventory.enums.AccessoriesTypes;
import com.ekart.inventory.service.AccessoriesProductService;

@CrossOrigin("http://localhost:3000/")
@RestController
@RequestMapping("api/accessoriesProducts")
public class AccessoriesProductsController {
	
	@Autowired
	private AccessoriesProductService accessoriesProductService;
	
	@PostMapping("/add")
	public ResponseEntity<String> addProduct(@RequestBody AccessoriesProducts accessoriesProduct) {
		accessoriesProductService.saveAccessoriesProducts(accessoriesProduct);
		return ResponseEntity.status(HttpStatusCode.valueOf(201)).body("Accessory product Added");
	}
	

	@PostMapping("/addMultipleProducts")
	public ResponseEntity<String> addMultipleProduct(@RequestBody List<AccessoriesProducts> accessoriesProducts) {

		for(AccessoriesProducts  prods : accessoriesProducts) {
			accessoriesProductService.saveAccessoriesProducts(prods);
		}
		return ResponseEntity.status(HttpStatusCode.valueOf(201)).body("Multiple Items added");
	}
	
	
	@GetMapping("/getAllAccessoriesProduct")
	public ResponseEntity<List<AccessoriesProducts>> getAllAccessoriesProducts(){
		List<AccessoriesProducts> accessoriesProducts = accessoriesProductService.getAccessoriesProducts();
		return ResponseEntity.status(HttpStatusCode.valueOf(200)).body(accessoriesProducts);
	}
	
	@GetMapping("/getAccessoriesProductById/{accessoryId}")
	public ResponseEntity<AccessoriesProducts> getAccessoriesProductById(@PathVariable int id) {
		AccessoriesProducts accessoriesProducts = accessoriesProductService.getAccessoriesProductById(id);
		return ResponseEntity.status(HttpStatusCode.valueOf(200)).body(accessoriesProducts);
	}
	
	@GetMapping("/getAccessoriesProductByType/{type}")
	public ResponseEntity<List<AccessoriesProducts>> getAccessoriesProductByType(@PathVariable AccessoriesTypes type){
		List<AccessoriesProducts> accessoriesProducts = accessoriesProductService.getAccessoriesProductsByType(type);
		return ResponseEntity.status(HttpStatusCode.valueOf(200)).body(accessoriesProducts);
	}

}
