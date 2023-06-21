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

import com.ekart.inventory.entity.FootWear;
import com.ekart.inventory.enums.FootWearType;
import com.ekart.inventory.enums.Suitable;
import com.ekart.inventory.service.FootWearService;

@RestController
@RequestMapping("/api/footWear")
public class FootWearController {
	
	private static final Logger LOGGER = LoggerFactory.getLogger(FootWearController.class);

	@Autowired
	private FootWearService footWearService;

	@GetMapping("/getAllFootWear")
	public ResponseEntity<List<FootWear>> fetchFootWare() {
		List<FootWear> footWearList = footWearService.GetAllFootWear();
		LOGGER.info("Returning all footwear");
		return ResponseEntity.status(HttpStatusCode.valueOf(200)).body(footWearList);
	}

	@GetMapping("/getFootWearById/{id}")
	public ResponseEntity<FootWear> getFootwearById(@PathVariable int id) {
		FootWear footwear = footWearService.GetFootWearBYId(id);
		LOGGER.info("Returning footwear by id {}",id);
		return ResponseEntity.status(HttpStatusCode.valueOf(200)).body(footwear);
	}

	@GetMapping("/getFootWearByType/{type}")
	public ResponseEntity<List<FootWear>> fetchByType(@PathVariable FootWearType type) {
		List<FootWear> footWearList = footWearService.GetFootWearByType(type);
		LOGGER.info("Returning footwear by type {}",type);
		return ResponseEntity.status(HttpStatusCode.valueOf(200)).body(footWearList);
	}

	@GetMapping("/getFootWearByTypeAndId/type/{type}/{footWearId}")
	public ResponseEntity<FootWear> fetchByTypeandId(@PathVariable FootWearType type, @PathVariable int footWearId) {
		FootWear footWear = footWearService.getFootWearByTypeAndId(type, footWearId);
		LOGGER.info("Returning footwear by type {} and id {}",type,footWearId);
		return ResponseEntity.status(HttpStatusCode.valueOf(200)).body(footWear);
	}

	@GetMapping("/getFootWearBySuitable/suitableFor/{suitable}")
	public ResponseEntity<List<FootWear>> fetchBySuitable(@PathVariable Suitable suitable) {
		List<FootWear> footWearList = footWearService.GetFootWearBySuitable(suitable);
		LOGGER.info("Returning all footwear by suitable {}",suitable);
		return ResponseEntity.status(HttpStatusCode.valueOf(200)).body(footWearList);
	}

	@PostMapping("/add")
	public ResponseEntity<String> saveFootWare(@RequestBody FootWear footWear) {
		String result = footWearService.PostFootWare(footWear);
		LOGGER.info("Adding footwear to database");
		return ResponseEntity.status(HttpStatusCode.valueOf(201)).body(result);
	}

	@PostMapping("/addMultipleFootWear")
	public ResponseEntity<String> SaveMultipleFootWear(@RequestBody List<FootWear> footWears) {

		for (FootWear footWear : footWears) {
			footWearService.PostFootWare(footWear);
		}
		LOGGER.info("Adding multiple footwear into database");
		return ResponseEntity.status(HttpStatusCode.valueOf(201)).body("Multiple Foot Wear Added");
	}

	@PutMapping("/setQuantity/{prodId}/{quantity}")
	public void settingQuantityFootWear(@PathVariable int prodId, @PathVariable int quantity) {
		FootWear footWear = footWearService.GetFootWearBYId(prodId);

		footWear.setQty(footWear.getQty() - quantity);
		footWearService.PostFootWare(footWear);
		LOGGER.info("Update the quantity for id {}",prodId);
	}

	@GetMapping("/getFootWearBySellerName/{sellerName}")
	public ResponseEntity<List<FootWear>> fetchBySellerName(@PathVariable String sellerName) {
		List<FootWear> footWearList = footWearService.GetFootWearBySellerName(sellerName);
		LOGGER.info("Return all footwear by seller name {}",sellerName);
		return ResponseEntity.status(HttpStatusCode.valueOf(200)).body(footWearList);
	}
	
	
	@PutMapping("/updateSellerProducts/{footWearId}")
    public ResponseEntity<FootWear> updateFootWearProducts(@PathVariable int footWearId,@RequestBody FootWear footwearProducts) {
        
		FootWear updateFootWearProducts=footWearService.GetFootWearBYId(footWearId);
            
        updateFootWearProducts.setProductName(footwearProducts.getProductName());
        updateFootWearProducts.setProductPrice(footwearProducts.getProductPrice());
        updateFootWearProducts.setLogoImg(footwearProducts.getLogoImg());
        updateFootWearProducts.setProductDescription(footwearProducts.getProductDescription());
        updateFootWearProducts.setBrandName(footwearProducts.getBrandName());
        updateFootWearProducts.setType(footwearProducts.getType());
        updateFootWearProducts.setSuitablefor(footwearProducts.getSuitablefor());
        updateFootWearProducts.setSize(footwearProducts.getSize());
        updateFootWearProducts.setColor(footwearProducts.getColor());
        updateFootWearProducts.setManufactureDate(footwearProducts.getManufactureDate());
        updateFootWearProducts.setQty(footwearProducts.getQty());
        updateFootWearProducts.setProductImg1(footwearProducts.getProductImg1());
        updateFootWearProducts.setProductImg2(footwearProducts.getProductImg2());
        updateFootWearProducts.setProductImg3(footwearProducts.getProductImg3());
        updateFootWearProducts.setProductImg4(footwearProducts.getProductImg4());
        updateFootWearProducts.setProductImg5(footwearProducts.getProductImg5());
        
        footWearService.saveSellerFootWearProducts(updateFootWearProducts);
        LOGGER.info("Update seller footwear for id {}",footWearId);
        return ResponseEntity.status(HttpStatusCode.valueOf(200)).body(updateFootWearProducts);
    }
	
	@GetMapping("/getFootWearBySellerNameAndType/sellerName/{sellerName}/type/{type}")
	public ResponseEntity<List<FootWear>> fetchBySellerNameAndType(@PathVariable String sellerName,@PathVariable FootWearType type) {
		List<FootWear> footWearList = footWearService.GetFootWearBySellerNameAndType(sellerName,type);
		LOGGER.info("Returning all footwear by seller name {} and type {}",sellerName,type);
		return ResponseEntity.status(HttpStatusCode.valueOf(200)).body(footWearList);
	}

}
