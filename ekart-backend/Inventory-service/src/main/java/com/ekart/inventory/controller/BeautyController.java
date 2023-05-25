package com.ekart.inventory.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.ekart.inventory.entity.Beauty;
import com.ekart.inventory.service.BeautyService;

@RestController
@RequestMapping("/api/beauty")
@CrossOrigin("http://localhost:3000/")
public class BeautyController {

	@Autowired
	private BeautyService beautyService;

	@PostMapping("/addMultipleBeautyProducts")
	public ResponseEntity<String> saveAllBeautyProducts(@RequestBody List<Beauty> beautyProductsList) {

		for (Beauty beauty : beautyProductsList) {
			String response = beautyService.addBeautyProducts(beauty);
		}
		return ResponseEntity.status(HttpStatusCode.valueOf(201)).body("Added multiple beauty products");
	}

	@PostMapping("/add")
	public ResponseEntity<String> saveBeautyProducts(@RequestBody Beauty beauty) {
		String response = beautyService.addBeautyProducts(beauty);
		return ResponseEntity.status(HttpStatusCode.valueOf(201)).body(response);
	}

	@GetMapping("/getBeautyProducts")
	public ResponseEntity<List<Beauty>> fetchAllBeautyProducts() {
		List<Beauty> beautyProductsList = beautyService.getAllBeautyProducts();

		return ResponseEntity.status(HttpStatusCode.valueOf(200)).body(beautyProductsList);
	}

	@GetMapping("/getBeautyById/{id}")
	public ResponseEntity<Beauty> fetchByBeautyProductId(@PathVariable int id) {
		Beauty beauty = beautyService.getBeautyById(id);

		return ResponseEntity.status(HttpStatusCode.valueOf(200)).body(beauty);
	}

	@PutMapping("/setQuantity/{prodId}/{quantity}")
	public void settingQuantityBeauty(@PathVariable int prodId, @PathVariable int quantity){

		Beauty beauty = beautyService.getBeautyById(prodId);
		beauty.setQty(beauty.getQty()-quantity);
		beautyService.addBeautyProducts(beauty);

	}
	
	@GetMapping("/getBeautyBySellerName/{sellerName}")
	public ResponseEntity<List<Beauty>> getBeautySellerName(@PathVariable String sellerName){
		List<Beauty> beautyProducts=beautyService.getBeautyBySellerName(sellerName);
		return ResponseEntity.status(HttpStatusCode.valueOf(200)).body(beautyProducts);
		
	}

	}
