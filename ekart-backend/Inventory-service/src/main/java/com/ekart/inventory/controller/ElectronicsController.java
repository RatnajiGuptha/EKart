package com.ekart.inventory.controller;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ekart.inventory.entity.ElectronicsProducts;
import com.ekart.inventory.enums.ElectronicsTypes;
import com.ekart.inventory.service.ElectronicsService;

@RestController
@RequestMapping("/api/electronicsProducts")
public class ElectronicsController {
	
	private static final Logger LOGGER = LoggerFactory.getLogger(ElectronicsController.class);

	@Autowired
	private ElectronicsService electronicsService;

	@PostMapping("/add")
	public ResponseEntity<String> saveElectronics(@RequestBody ElectronicsProducts product) {
		electronicsService.saveElectronics(product);
		LOGGER.info("Adding single electronic products into database");
		return ResponseEntity.status(HttpStatusCode.valueOf(201)).body("Electronics product added");
	}

	@PostMapping("/addMultipleElectronics")
	public ResponseEntity<String> saveMultipleProducts(@RequestBody List<ElectronicsProducts> products) {
		for (ElectronicsProducts prod : products) {
			electronicsService.saveElectronics(prod);
		}
		LOGGER.info("Adding multiple electronic products into database");
		return ResponseEntity.status(HttpStatusCode.valueOf(201)).body("Multiple Electronic products added");
	}

	@GetMapping("/getAllElectronics")
	public ResponseEntity<List<ElectronicsProducts>> getElectronics() {
		List<ElectronicsProducts> electronicsProducts = electronicsService.fetchAllElectronics();
		LOGGER.info("Returning all electronic products");
		return ResponseEntity.status(HttpStatusCode.valueOf(200)).body(electronicsProducts);
	}

	@GetMapping("/getElectronicsByType/{type}")
	public ResponseEntity<List<ElectronicsProducts>> getElectronicsByType(@PathVariable ElectronicsTypes type) {
		List<ElectronicsProducts> electronicsProductsByType = electronicsService.fetchByElectronicsType(type);
		LOGGER.info("Returning electronic products by type {}",type);
		return ResponseEntity.status(HttpStatusCode.valueOf(200)).body(electronicsProductsByType);
	}

	@GetMapping("/getElectronicsByTypeAndId/{type}/{electronicsId}")
	public ResponseEntity<ElectronicsProducts> getElectronicsByType(@PathVariable ElectronicsTypes type,
			@PathVariable int electronicsId) {
		ElectronicsProducts electronicsProductsById = electronicsService.fetchByElectronicsId(electronicsId);
		LOGGER.info("Returning electronic products by type {} and id {}",type,electronicsId);
		return ResponseEntity.status(HttpStatusCode.valueOf(200)).body(electronicsProductsById);
	}

	@GetMapping("/getElectronicsById/{electronicsId}")
	public ResponseEntity<ElectronicsProducts> getElectronicsById(@PathVariable int electronicsId) {
		ElectronicsProducts electronicsProductsById = electronicsService.fetchByElectronicsId(electronicsId);
		LOGGER.info("Returning electronic products by id {}",electronicsId);
		return ResponseEntity.status(HttpStatusCode.valueOf(200)).body(electronicsProductsById);
	}

	@PutMapping("/setQuantity/{prodId}/{quantity}")
	public void settingQuantity(@PathVariable int prodId, @PathVariable int quantity) {
		ElectronicsProducts electronicsProducts = electronicsService.fetchByElectronicsId(prodId);

		electronicsProducts.setQty(electronicsProducts.getQty() - quantity);
		electronicsService.saveElectronics(electronicsProducts);
		LOGGER.info("Updated the quantity for id {}",prodId);
	}

	@GetMapping("/getElectronicsBySellerName/sellerName/{sellerName}")
	public ResponseEntity<List<ElectronicsProducts>> getElectronicsBySellerName(@PathVariable String sellerName) {
		List<ElectronicsProducts> electronicsProducts = electronicsService.GetElectronicsBySellerName(sellerName);
		LOGGER.info("Returning all electronic products by seller name {}",sellerName);
		return ResponseEntity.status(HttpStatusCode.valueOf(200)).body(electronicsProducts);
	}
	
	@PutMapping("/updateSellerProducts/{electronicsId}")
    public ResponseEntity<ElectronicsProducts> updateElectronicsProducts(@PathVariable int electronicsId,@RequestBody ElectronicsProducts electronicsProducts) {
        
        ElectronicsProducts updateElectronicsProducts=electronicsService.fetchByElectronicsId(electronicsId);
            
        updateElectronicsProducts.setProductName(electronicsProducts.getProductName());
        updateElectronicsProducts.setProductPrice(electronicsProducts.getProductPrice());
        updateElectronicsProducts.setLogoImg(electronicsProducts.getLogoImg());
        updateElectronicsProducts.setProductDescription(electronicsProducts.getProductDescription());
        updateElectronicsProducts.setBrandName(electronicsProducts.getBrandName());
        updateElectronicsProducts.setType(electronicsProducts.getType());
        updateElectronicsProducts.setCapacity(electronicsProducts.getCapacity());
        updateElectronicsProducts.setColor(electronicsProducts.getColor());
        updateElectronicsProducts.setManufactureDate(electronicsProducts.getManufactureDate());
        updateElectronicsProducts.setQty(electronicsProducts.getQty());
        updateElectronicsProducts.setProductImg1(electronicsProducts.getProductImg1());
        updateElectronicsProducts.setProductImg2(electronicsProducts.getProductImg2());
        updateElectronicsProducts.setProductImg3(electronicsProducts.getProductImg3());
        updateElectronicsProducts.setProductImg4(electronicsProducts.getProductImg4());
        updateElectronicsProducts.setProductImg5(electronicsProducts.getProductImg5());
        
        electronicsService.saveSellerElectronicProducts(updateElectronicsProducts);
        LOGGER.info("Updated electronic products for id {}",electronicsId);
        return ResponseEntity.status(HttpStatusCode.valueOf(200)).body(updateElectronicsProducts);
    }
	
	@GetMapping("/getElectronicsBySellerNameAndType/sellerName/{sellerName}/type/{type}")
	public ResponseEntity<List<ElectronicsProducts>> getElectronicsBySellerNameAndType(@PathVariable String sellerName,@PathVariable ElectronicsTypes type) {
		List<ElectronicsProducts> electronicsProducts = electronicsService.GetElectronicsBySellerNameAndType(sellerName,type);
		LOGGER.info("Returning all electronic products by type {} and seller name {}",type,sellerName);
		return ResponseEntity.status(HttpStatusCode.valueOf(200)).body(electronicsProducts);
	}

}
