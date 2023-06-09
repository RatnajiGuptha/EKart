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

import com.ekart.inventory.entity.Beauty;
import com.ekart.inventory.service.BeautyService;

@RestController
@RequestMapping("/api/beauty")
public class BeautyController {
	
	private static final Logger LOGGER = LoggerFactory.getLogger(BeautyController.class);


	@Autowired
	private BeautyService beautyService;

	@PostMapping("/addMultipleBeautyProducts")
	public ResponseEntity<String> saveAllBeautyProducts(@RequestBody List<Beauty> beautyProductsList) {

		for (Beauty beauty : beautyProductsList) {
			 beautyService.addBeautyProducts(beauty);
		}
		LOGGER.info("Adding multiple beauty products into database");
		return ResponseEntity.status(HttpStatusCode.valueOf(201)).body("Added multiple beauty products");
	}

	@PostMapping("/add")
	public ResponseEntity<String> saveBeautyProducts(@RequestBody Beauty beauty) {
		String response = beautyService.addBeautyProducts(beauty);
		LOGGER.info("Adding single beauty product into database");
		return ResponseEntity.status(HttpStatusCode.valueOf(201)).body(response);
	}

	@GetMapping("/getAllBeautyProducts")
	public ResponseEntity<List<Beauty>> fetchAllBeautyProducts() {
		List<Beauty> beautyProductsList = beautyService.getAllBeautyProducts();
		LOGGER.info("Returning all beauty products");
		return ResponseEntity.status(HttpStatusCode.valueOf(200)).body(beautyProductsList);
	}

	@GetMapping("/getBeautyById/{id}")
	public ResponseEntity<Beauty> fetchByBeautyProductId(@PathVariable int id) {
		Beauty beauty = beautyService.getBeautyById(id);
		LOGGER.info("Returning beauty products by id {}",id);
		return ResponseEntity.status(HttpStatusCode.valueOf(200)).body(beauty);
	}

	@PutMapping("/setQuantity/{prodId}/{quantity}")
	public void settingQuantityBeauty(@PathVariable int prodId, @PathVariable int quantity){

		Beauty beauty = beautyService.getBeautyById(prodId);
		beauty.setQty(beauty.getQty()-quantity);
		beautyService.addBeautyProducts(beauty);
		LOGGER.info("Updated the quantity for product id {}",prodId);

	}
	
	@GetMapping("/getBeautyBySellerName/{sellerName}")
	public ResponseEntity<List<Beauty>> getBeautySellerName(@PathVariable String sellerName){
		List<Beauty> beautyProducts=beautyService.getBeautyBySellerName(sellerName);
		LOGGER.info("Returning all beauty products by seller name {}",sellerName);
		return ResponseEntity.status(HttpStatusCode.valueOf(200)).body(beautyProducts);
		
	}
	
	@PutMapping("/updateSellerProducts/{beautyId}")
    public ResponseEntity<Beauty> updateBeautyProducts(@PathVariable int beautyId,@RequestBody Beauty beauty) {
        
        Beauty updateBeautyProducts=beautyService.getBeautyById(beautyId);
            
        updateBeautyProducts.setProductName(beauty.getProductName());
        updateBeautyProducts.setProductPrice(beauty.getProductPrice());
        updateBeautyProducts.setLogoImg(beauty.getLogoImg());
        updateBeautyProducts.setProductDescription(beauty.getProductDescription());
        updateBeautyProducts.setBrandName(beauty.getBrandName());
        updateBeautyProducts.setType(beauty.getType());
        updateBeautyProducts.setSuitablefor(beauty.getSuitablefor());
        updateBeautyProducts.setSize(beauty.getSize());
        updateBeautyProducts.setManufactureDate(beauty.getManufactureDate());
        updateBeautyProducts.setQty(beauty.getQty());
        updateBeautyProducts.setProductImg1(beauty.getProductImg1());
        updateBeautyProducts.setProductImg2(beauty.getProductImg2());
        updateBeautyProducts.setProductImg3(beauty.getProductImg3());
        updateBeautyProducts.setProductImg4(beauty.getProductImg4());
        
        beautyService.saveSellerBeautyProducts(updateBeautyProducts);
        LOGGER.info("Updated seller beauty products for id {}",beautyId);
        return ResponseEntity.status(HttpStatusCode.valueOf(200)).body(updateBeautyProducts);
    }

	}
