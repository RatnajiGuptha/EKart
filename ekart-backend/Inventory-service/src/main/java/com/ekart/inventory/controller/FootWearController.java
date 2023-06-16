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

import com.ekart.inventory.entity.FootWear;
import com.ekart.inventory.enums.FootWearType;
import com.ekart.inventory.enums.Suitable;
import com.ekart.inventory.service.FootWearService;

@RestController
@RequestMapping("/api/footWear")
public class FootWearController {

	@Autowired
	private FootWearService footWearService;

	@GetMapping("/getAllFootWear")
	public ResponseEntity<List<FootWear>> fetchFootWare() {
		List<FootWear> footWearList = footWearService.GetAllFootWear();

		return ResponseEntity.status(HttpStatusCode.valueOf(200)).body(footWearList);
	}

	@GetMapping("/getFootWearById/{id}")
	public ResponseEntity<FootWear> getFootwearById(@PathVariable int id) {
		FootWear footwear = footWearService.GetFootWearBYId(id);
		return ResponseEntity.status(HttpStatusCode.valueOf(200)).body(footwear);
	}

	@GetMapping("/getFootWearByType/{type}")
	public ResponseEntity<List<FootWear>> fetchByType(@PathVariable FootWearType type) {
		List<FootWear> footWearList = footWearService.GetFootWearByType(type);

		return ResponseEntity.status(HttpStatusCode.valueOf(200)).body(footWearList);
	}

	@GetMapping("/getFootWearByTypeAndId/type/{type}/{footWearId}")
	public ResponseEntity<FootWear> fetchByTypeandId(@PathVariable FootWearType type, @PathVariable int footWearId) {
		FootWear footWear = footWearService.getFootWearByTypeAndId(type, footWearId);
		return ResponseEntity.status(HttpStatusCode.valueOf(200)).body(footWear);
	}

	@GetMapping("/getFootWearBySuitable/suitableFor/{suitable}")
	public ResponseEntity<List<FootWear>> fetchBySuitable(@PathVariable Suitable suitable) {
		List<FootWear> footWearList = footWearService.GetFootWearBySuitable(suitable);
		return ResponseEntity.status(HttpStatusCode.valueOf(200)).body(footWearList);
	}

	@PostMapping("/add")
	public ResponseEntity<String> saveFootWare(@RequestBody FootWear footWear) {
		String result = footWearService.PostFootWare(footWear);
		return ResponseEntity.status(HttpStatusCode.valueOf(201)).body(result);
	}

	@PostMapping("/addMultipleFootWear")
	public ResponseEntity<String> SaveMultipleFootWear(@RequestBody List<FootWear> footWears) {

		for (FootWear footWear : footWears) {
			footWearService.PostFootWare(footWear);
		}
		return ResponseEntity.status(HttpStatusCode.valueOf(201)).body("Multiple Foot Wear Added");
	}

	@PutMapping("/setQuantity/{prodId}/{quantity}")
	public void settingQuantityFootWear(@PathVariable int prodId, @PathVariable int quantity) {
		FootWear footWear = footWearService.GetFootWearBYId(prodId);

		footWear.setQty(footWear.getQty() - quantity);
		footWearService.PostFootWare(footWear);
	}

	@GetMapping("/getFootWearBySellerName/{sellerName}")
	public ResponseEntity<List<FootWear>> fetchBySellerName(@PathVariable String sellerName) {
		List<FootWear> footWearList = footWearService.GetFootWearBySellerName(sellerName);

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

        return ResponseEntity.status(HttpStatusCode.valueOf(200)).body(updateFootWearProducts);
    }
	
	@GetMapping("/getFootWearBySellerNameAndType/sellerName/{sellerName}/type/{type}")
	public ResponseEntity<List<FootWear>> fetchBySellerNameAndType(@PathVariable String sellerName,@PathVariable FootWearType type) {
		List<FootWear> footWearList = footWearService.GetFootWearBySellerNameAndType(sellerName,type);

		return ResponseEntity.status(HttpStatusCode.valueOf(200)).body(footWearList);
	}

}
