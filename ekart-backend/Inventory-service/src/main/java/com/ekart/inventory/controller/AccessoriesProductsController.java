package com.ekart.inventory.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ekart.inventory.entity.AccessoriesProducts;
import com.ekart.inventory.enums.AccessoriesTypes;
import com.ekart.inventory.enums.Suitable;
import com.ekart.inventory.service.AccessoriesProductService;

@RestController
@CrossOrigin("http://localhost:3000/")
@RequestMapping("/api/accessoriesProducts")
public class AccessoriesProductsController {

	@Autowired
	private AccessoriesProductService accessoriesProductService;

	@GetMapping("/getAllAccessoriesProduct")
	public ResponseEntity<List<AccessoriesProducts>> getAllAccessoriesProducts() {
		List<AccessoriesProducts> accessoriesProducts = accessoriesProductService.getAccessoriesProducts();
		return ResponseEntity.status(HttpStatusCode.valueOf(200)).body(accessoriesProducts);
	}

	@GetMapping("/getAccessoriesProductById/{accessoryId}")
	public ResponseEntity<AccessoriesProducts> getAccessoriesProductById(@PathVariable int accessoryId) {
		AccessoriesProducts accessoriesProducts = accessoriesProductService.getAccessoriesProductById(accessoryId);
		return ResponseEntity.status(HttpStatusCode.valueOf(200)).body(accessoriesProducts);
	}

	@GetMapping("/getAccessories/type/{type}")
	public ResponseEntity<List<AccessoriesProducts>> getAccessoriesProductByType(@PathVariable AccessoriesTypes type) {
		List<AccessoriesProducts> accessoriesProducts = accessoriesProductService.getAccessoriesProductsByType(type);
		return ResponseEntity.status(HttpStatusCode.valueOf(200)).body(accessoriesProducts);
	}

	@GetMapping("/getAccessories/type/{type}/{accessoryId}")
	public ResponseEntity<AccessoriesProducts> getAccessoriesProductByTypeandId(@PathVariable AccessoriesTypes type,
			@PathVariable int accessoryId) {
		AccessoriesProducts acccessoryProductById = accessoriesProductService.getAccessoriesByTpeAndProductById(type,
				accessoryId);
		return ResponseEntity.status(HttpStatusCode.valueOf(200)).body(acccessoryProductById);
	}

	@GetMapping("/getAccessories/suitableFor/{suitable}")
	public ResponseEntity<List<AccessoriesProducts>> getAccessoriesProductsBySuitable(@PathVariable Suitable suitable) {
		List<AccessoriesProducts> accessoriesProducts = accessoriesProductService
				.GetAccessoriesProductsBySuitable(suitable);
		return ResponseEntity.status(HttpStatusCode.valueOf(200)).body(accessoriesProducts);
	}

	@PostMapping("/add")
	public ResponseEntity<String> addProduct(@RequestBody AccessoriesProducts accessoriesProduct) {
		accessoriesProductService.saveAccessoriesProducts(accessoriesProduct);
		return ResponseEntity.status(HttpStatusCode.valueOf(201)).body("Accessory product Added");
	}

	@PostMapping("/addMultipleProducts")
	public ResponseEntity<String> addMultipleProduct(@RequestBody List<AccessoriesProducts> accessoriesProducts) {

		for (AccessoriesProducts prods : accessoriesProducts) {
			accessoriesProductService.saveAccessoriesProducts(prods);
		}
		return ResponseEntity.status(HttpStatusCode.valueOf(201)).body("Multiple Items added");
	}

	@PutMapping("/setQuantity/{prodId}/{quantity}")
	public void settingQuantityAccessory(@PathVariable int prodId, @PathVariable int quantity) {

		AccessoriesProducts accessoriesProducts = accessoriesProductService.getAccessoriesProductById(prodId);

		accessoriesProducts.setQty(accessoriesProducts.getQty() - quantity);
		accessoriesProductService.saveAccessoriesProducts(accessoriesProducts);
	}

	@GetMapping("/getAccessories/sellerName/{sellerName}")
	public ResponseEntity<List<AccessoriesProducts>> getAccessoriesProductsBySellerName(
			@PathVariable String sellerName) {
		List<AccessoriesProducts> accessoriesProducts = accessoriesProductService
				.GetAccessoriesProductsBySellerName(sellerName);
		return ResponseEntity.status(HttpStatusCode.valueOf(200)).body(accessoriesProducts);
	}
	
	@PutMapping("/updateProducts/{accessoryId}")
    public ResponseEntity<AccessoriesProducts> updateAccessoriesProducts(@PathVariable int accessoryId,@RequestBody AccessoriesProducts accessoriesProducts) {
        
        AccessoriesProducts updateAccessoriesProducts=accessoriesProductService.getAccessoriesProductById(accessoryId);
            
        updateAccessoriesProducts.setProductName(accessoriesProducts.getProductName());
        updateAccessoriesProducts.setProductPrice(accessoriesProducts.getProductPrice());
        updateAccessoriesProducts.setLogoImg(accessoriesProducts.getLogoImg());
        updateAccessoriesProducts.setProductDescription(accessoriesProducts.getProductDescription());
        updateAccessoriesProducts.setBrandName(accessoriesProducts.getBrandName());
        updateAccessoriesProducts.setType(accessoriesProducts.getType());
        updateAccessoriesProducts.setSuitablefor(accessoriesProducts.getSuitablefor());
        updateAccessoriesProducts.setSize(accessoriesProducts.getSize());
        updateAccessoriesProducts.setColor(accessoriesProducts.getColor());
        updateAccessoriesProducts.setManufactureDate(accessoriesProducts.getManufactureDate());
        updateAccessoriesProducts.setQty(accessoriesProducts.getQty());
        updateAccessoriesProducts.setProductImg1(accessoriesProducts.getProductImg1());
        updateAccessoriesProducts.setProductImg2(accessoriesProducts.getProductImg2());
        updateAccessoriesProducts.setProductImg3(accessoriesProducts.getProductImg3());
        updateAccessoriesProducts.setProductImg4(accessoriesProducts.getProductImg4());
        updateAccessoriesProducts.setProductImg5(accessoriesProducts.getProductImg5());
        
        accessoriesProductService.saveSellerAccessoriesProducts(updateAccessoriesProducts);

        return ResponseEntity.status(HttpStatusCode.valueOf(200)).body(updateAccessoriesProducts);
    }

}
