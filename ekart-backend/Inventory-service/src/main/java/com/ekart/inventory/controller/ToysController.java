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

import com.ekart.inventory.entity.Toys;
import com.ekart.inventory.service.ToysService;


@RestController
@RequestMapping("/api/Toys")
@CrossOrigin(origins = "http://localhost:3000/")
public class ToysController {

    @Autowired
    private ToysService toysService;

    @PostMapping("/addMultipleToys")
    public ResponseEntity<String> saveAllToys(@RequestBody List<Toys> toysList) {

        for (Toys toys : toysList) {
            toysService.addToys(toys);
        }
        return ResponseEntity.status(HttpStatusCode.valueOf(201)).body("Added multiple toys");
    }

    @PostMapping("/add")
    public ResponseEntity<String> saveToys(@RequestBody Toys toys) {
        String response = toysService.addToys(toys);
        return ResponseEntity.status(HttpStatusCode.valueOf(201)).body(response);
    }

    @GetMapping("/getToys")
    public ResponseEntity<List<Toys>> fetchAllToys() {
        List<Toys> toysList = toysService.getAllToys();

        return ResponseEntity.status(HttpStatusCode.valueOf(200)).body(toysList);
    }

    @GetMapping("/getToys/{id}")
    public ResponseEntity<Toys> fetchByToyId(@PathVariable int id) {
        Toys toy = toysService.getToyById(id);

        return ResponseEntity.status(HttpStatusCode.valueOf(200)).body(toy);
    }

    @PutMapping("/setQuantity/{prodId}/{quantity}")
    public void settingQuantityToys(@PathVariable int prodId, @PathVariable int quantity) {

        Toys toys = toysService.getToyById(prodId);
        toys.setQty(toys.getQty()-quantity);
        toysService.addToys(toys);

    }
    
    @GetMapping("/getToys/sellerName/{sellerName}")
	public ResponseEntity<List<Toys>> getToysBySellerName(@PathVariable String sellerName) {
		List<Toys> toys = toysService.GetToysBySellerName(sellerName);
		return ResponseEntity.status(HttpStatusCode.valueOf(200)).body(toys);
	}
    
    @PutMapping("/updateProducts/{toyId}")
    public ResponseEntity<Toys> updateToyProducts(@PathVariable int toyId,@RequestBody Toys toys) {
        
        Toys updateToys=toysService.getToyById(toyId);
            
        updateToys.setProductName(toys.getProductName());
        updateToys.setProductPrice(toys.getProductPrice());
        updateToys.setLogoImg(toys.getLogoImg());
        updateToys.setProductDescription(toys.getProductDescription());
        updateToys.setBrandName(toys.getBrandName());
        updateToys.setType(toys.getType());
        updateToys.setSuitablefor(toys.getSuitablefor());
        updateToys.setSize(toys.getSize());
        updateToys.setColor(toys.getColor());
        updateToys.setManufactureDate(toys.getManufactureDate());
        updateToys.setQty(toys.getQty());
        updateToys.setProductImg1(toys.getProductImg1());
        updateToys.setProductImg2(toys.getProductImg2());
        updateToys.setProductImg3(toys.getProductImg3());
        updateToys.setProductImg4(toys.getProductImg4());
        updateToys.setProductImg5(toys.getProductImg5());
        
        toysService.saveSellerToys(updateToys);

        return ResponseEntity.status(HttpStatusCode.valueOf(200)).body(updateToys);
    }
    
    
}
