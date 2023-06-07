package com.ekart.inventory.controller;

import java.util.List;

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

import com.ekart.inventory.entity.FashionProducts;
import com.ekart.inventory.enums.FashionTypes;
import com.ekart.inventory.enums.Suitable;
import com.ekart.inventory.service.FashionProductService;

@RestController
@RequestMapping("/api/fashionProducts")
public class FashionProductsController {

	@Autowired
	private FashionProductService fashionService;

	@GetMapping("/getAllProducts")
	public ResponseEntity<List<FashionProducts>> getFashionProducts() {
		List<FashionProducts> fashionProduct = fashionService.loadFashionProducts();
		return ResponseEntity.status(HttpStatusCode.valueOf(200)).body(fashionProduct);
	}

	@GetMapping("/getProductsById/{productId}")
	public ResponseEntity<FashionProducts> getFashionProductsById(@PathVariable int productId) {
		FashionProducts product = fashionService.fetchById(productId);
		return ResponseEntity.status(HttpStatusCode.valueOf(200)).body(product);
	}

	@GetMapping("/getProductsByType/type/{type}")
	public ResponseEntity<List<FashionProducts>> getFashionProductsByType(@PathVariable FashionTypes type) {
		List<FashionProducts> fetchByTypes = fashionService.fetchByType(type);
		return ResponseEntity.status(HttpStatusCode.valueOf(200)).body(fetchByTypes);
	}

	@GetMapping("/getProductsByTypeAndId/type/{type}/{productId}")
	public ResponseEntity<FashionProducts> getFashionProductsByTypeAndId(@PathVariable FashionTypes type,
			@PathVariable int productId) {
		FashionProducts product = fashionService.fetchByProductTypeAndProductId(type, productId);
		return ResponseEntity.status(HttpStatusCode.valueOf(200)).body(product);
	}

	@GetMapping("/getProductsBySuitable/suitableFor/{suitable}")
	public ResponseEntity<List<FashionProducts>> getFashionProductsBySuitable(@PathVariable Suitable suitable) {
		List<FashionProducts> fashionProducts = fashionService.GetFashionProductsBySuitable(suitable);
		return ResponseEntity.status(HttpStatusCode.valueOf(200)).body(fashionProducts);
	}

	@GetMapping("/getSuitableProductsById/suitableFor/{suitable}/{productId}")
	public ResponseEntity<FashionProducts> getFashionProductsBySuitableById(@PathVariable Suitable suitable,
			@PathVariable int productId) {
		FashionProducts product = fashionService.fetchBySuitableForAndProductId(suitable, productId);
		return ResponseEntity.status(HttpStatusCode.valueOf(200)).body(product);
	}

	@GetMapping("/getProductsByGenderAndType/suitablefor/{suitable}/{type}")
	public ResponseEntity<List<FashionProducts>> getProductsByGenderWithTypes(@PathVariable Suitable suitable,
			@PathVariable FashionTypes type) {
		List<FashionProducts> fashionProducts = fashionService.getFashionProductsByGenderWithTypes(suitable, type);
		return ResponseEntity.status(HttpStatusCode.valueOf(200)).body(fashionProducts);

	}

	@GetMapping("/getSuitableProductsByTypeAndId/suitablefor/{suitable}/{type}/id/{productId}")
	public ResponseEntity<FashionProducts> getProductsByGenderWithTypesAndProductId(@PathVariable Suitable suitable,
			@PathVariable FashionTypes type, @PathVariable int productId) {
		FashionProducts fashionProducts = fashionService.getFashionProductsByGenderWithTypesAndProductId(suitable, type,
				productId);
		return ResponseEntity.status(HttpStatusCode.valueOf(200)).body(fashionProducts);

	}

	@PostMapping("/addMultipleProducts")
	public ResponseEntity<String> addMultipleProduct(@RequestBody List<FashionProducts> fashionProducts) {

		for (FashionProducts prods : fashionProducts) {
			fashionService.saveFashionProduct(prods);
		}
		return ResponseEntity.status(HttpStatusCode.valueOf(201)).body("Multiple fashion products added");
	}

	@PostMapping("/add")
	public ResponseEntity<String> addFashionProduct(@RequestBody FashionProducts fashionProducts) {
		fashionService.saveFashionProduct(fashionProducts);
		return ResponseEntity.status(HttpStatusCode.valueOf(201)).body("Fashion product added");
	}

	@PutMapping("/setQuantity/{prodId}/{quantity}")
	public void settingQuantityFashion(@PathVariable int prodId, @PathVariable int quantity) {

		FashionProducts fashionProducts = fashionService.fetchById(prodId);
		fashionProducts.setQty(fashionProducts.getQty() - quantity);

		fashionService.saveFashionProduct(fashionProducts);
	}
	
	@GetMapping("/getSellerProducts/sellerName/{sellerName}")
	public ResponseEntity<List<FashionProducts>> getFashionProductsBySellerName(@PathVariable String sellerName) {
		List<FashionProducts> fashionProducts = fashionService.GetFashionProductsBySellerName(sellerName);
		return ResponseEntity.status(HttpStatusCode.valueOf(200)).body(fashionProducts);
	}
	
	@PutMapping("/updateSellerProducts/{fashionId}")
    public ResponseEntity<FashionProducts> updateFashionProducts(@PathVariable int fashionId,@RequestBody FashionProducts fashionProducts) {
        
        FashionProducts updateFashionProducts=fashionService.fetchById(fashionId);
            
        updateFashionProducts.setProductName(fashionProducts.getProductName());
        updateFashionProducts.setProductPrice(fashionProducts.getProductPrice());
        updateFashionProducts.setLogoImg(fashionProducts.getLogoImg());
        updateFashionProducts.setProductDescription(fashionProducts.getProductDescription());
        updateFashionProducts.setBrandName(fashionProducts.getBrandName());
        updateFashionProducts.setType(fashionProducts.getType());
        updateFashionProducts.setSuitablefor(fashionProducts.getSuitablefor());
        updateFashionProducts.setSize(fashionProducts.getSize());
        updateFashionProducts.setColor(fashionProducts.getColor());
        updateFashionProducts.setManufactureDate(fashionProducts.getManufactureDate());
        updateFashionProducts.setQty(fashionProducts.getQty());
        updateFashionProducts.setProductImg1(fashionProducts.getProductImg1());
        updateFashionProducts.setProductImg2(fashionProducts.getProductImg2());
        updateFashionProducts.setProductImg3(fashionProducts.getProductImg3());
        updateFashionProducts.setProductImg4(fashionProducts.getProductImg4());
        updateFashionProducts.setProductImg5(fashionProducts.getProductImg5());
        
        fashionService.saveSellerFashionProducts(updateFashionProducts);

        return ResponseEntity.status(HttpStatusCode.valueOf(200)).body(updateFashionProducts);
    }
}