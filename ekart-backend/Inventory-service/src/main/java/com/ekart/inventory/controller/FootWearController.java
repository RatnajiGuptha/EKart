package com.ekart.inventory.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.ekart.inventory.entity.FootWear;
import com.ekart.inventory.enums.FootWearType;
import com.ekart.inventory.enums.Suitable;
import com.ekart.inventory.service.FootWearService;

@CrossOrigin("http://localhost:3000/")
@RestController
@RequestMapping("/api/footWear")
public class FootWearController {



	@Autowired
	private FootWearService footWearService;

	@GetMapping("/getFootWear")
	public ResponseEntity<List<FootWear>> fetchFootWare() {
		List<FootWear> footWearList = footWearService.GetAllFootWear();

		return ResponseEntity.status(HttpStatusCode.valueOf(200)).body(footWearList);
	}

	@GetMapping("/getFootWearById/{id}")
	public ResponseEntity<FootWear> getFootwearById(@PathVariable int id) {
		FootWear footwear = footWearService.GetFootWearBYId(id);
		return ResponseEntity.status(HttpStatusCode.valueOf(200)).body(footwear);
	}

	@GetMapping("/getFootWear/{type}")
	public ResponseEntity<List<FootWear>> fetchByType(@PathVariable FootWearType type) {
		List<FootWear> footWearList = footWearService.GetFootWearByType(type);

		return ResponseEntity.status(HttpStatusCode.valueOf(200)).body(footWearList);
	}

	@GetMapping("/getFootWear/type/{type}/{footWearId}")
	public ResponseEntity<FootWear> fetchByTypeandId(@PathVariable FootWearType type, @PathVariable int footWearId) {
		FootWear footWear = footWearService.getFootWearByTypeAndId(type, footWearId);
		return ResponseEntity.status(HttpStatusCode.valueOf(200)).body(footWear);
	}

	@GetMapping("/getFootWear/suitableFor/{suitable}")
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

}
