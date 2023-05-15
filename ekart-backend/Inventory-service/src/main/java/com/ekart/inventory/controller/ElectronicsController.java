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

import com.ekart.inventory.entity.ElectronicsProducts;
import com.ekart.inventory.enums.ElectronicsTypes;
import com.ekart.inventory.service.ElectronicsService;

@CrossOrigin("http://localhost:3000/")
@RestController
@RequestMapping("/api/electronicsProducts")
public class ElectronicsController {
	
	@Autowired
	private ElectronicsService electronicsService;
	
	@PostMapping("/add")
	public ResponseEntity<String> saveElectronics(@RequestBody ElectronicsProducts product){
		electronicsService.saveElectronics(product);
		return ResponseEntity.status(HttpStatusCode.valueOf(201)).body("Electronics product added");
	}
	
	@PostMapping("/addMultipleElectronics")
	public ResponseEntity<String> saveMultipleProducts(@RequestBody List<ElectronicsProducts> products){
		for(ElectronicsProducts prod:products) {
			electronicsService.saveElectronics(prod);
		}
		return ResponseEntity.status(HttpStatusCode.valueOf(201)).body("Multiple Electronic products added");
	}
	
	@GetMapping("/getElectronics")
	public ResponseEntity<List<ElectronicsProducts>> getElectronics(){
		List<ElectronicsProducts> electronicsProducts = electronicsService.fetchAllElectronics();
		return ResponseEntity.status(HttpStatusCode.valueOf(200)).body(electronicsProducts);
	}
	
	@GetMapping("/getElectronics/{type}")
	public ResponseEntity<List<ElectronicsProducts>> getElectronicsByType(@PathVariable ElectronicsTypes type){
		List<ElectronicsProducts> electronicsProductsByType = electronicsService.fetchByElectronicsType(type);
		return ResponseEntity.status(HttpStatusCode.valueOf(200)).body(electronicsProductsByType);
	}
	
	@GetMapping("/getElectronics/{type}/{electronicsId}")
	public ResponseEntity<ElectronicsProducts> getElectronicsByType(@PathVariable ElectronicsTypes type,@PathVariable int electronicsId){
		ElectronicsProducts electronicsProductsById = electronicsService.fetchByElectronicsId(electronicsId);
		return ResponseEntity.status(HttpStatusCode.valueOf(200)).body(electronicsProductsById);
	}
	
	@GetMapping("/getElectronicsById/{electronicsId}")
	public ResponseEntity<ElectronicsProducts> getElectronicsById(@PathVariable int electronicsId){
		ElectronicsProducts electronicsProductsById = electronicsService.fetchByElectronicsId(electronicsId);
		return ResponseEntity.status(HttpStatusCode.valueOf(200)).body(electronicsProductsById);
	}
	
}