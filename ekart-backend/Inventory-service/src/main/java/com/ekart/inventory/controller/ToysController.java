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

import com.ekart.inventory.entity.Toys;
import com.ekart.inventory.service.ToysService;


@RestController
@RequestMapping("/api/Toys")
@CrossOrigin(origins = "http://localhost:3000/")
public class ToysController {

    @Autowired
    private ToysService toysService;

    @PostMapping("/addMultipleToys")
    public ResponseEntity<String> saveAllToys(@RequestBody List<Toys> toysList){

        for(Toys toys : toysList){
           toysService.addToys(toys);
        }
        return ResponseEntity.status(HttpStatusCode.valueOf(201)).body("Added multiple toys");
    }

    @PostMapping("/add")
    public ResponseEntity<String> saveToys(@RequestBody Toys toys){
            String response = toysService.addToys(toys);
        return ResponseEntity.status(HttpStatusCode.valueOf(201)).body(response);
    }

    @GetMapping("/getToys")
    public ResponseEntity<List<Toys>> fetchAllToys(){
        List<Toys> toysList = toysService.getAllToys();

        return ResponseEntity.status(HttpStatusCode.valueOf(200)).body(toysList);
    }

    @GetMapping("/getToys/{id}")
    public ResponseEntity<Toys> fetchByToyId(@PathVariable int id){
        Toys toy = toysService.getToyById(id);

        return ResponseEntity.status(HttpStatusCode.valueOf(200)).body(toy);
    }

}
