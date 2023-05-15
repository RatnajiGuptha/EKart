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

    @PostMapping("/addMultipleFootWear")
    public ResponseEntity<String> SaveMultipleFootWear(@RequestBody List<FootWear> footWears){

        for(FootWear footWear : footWears){
            String result = footWearService.PostFootWare(footWear);
        }
        return ResponseEntity.status(HttpStatusCode.valueOf(201)).body("Multiple Foot Wear Added");
    }

    @PostMapping("/add")
    public ResponseEntity<String> saveFootWare(@RequestBody FootWear footWear){
        String result = footWearService.PostFootWare(footWear);
        return ResponseEntity.status(HttpStatusCode.valueOf(201)).body(result);
    }

    @GetMapping("/getFootWear")
    public ResponseEntity<List<FootWear>> fetchFootWare(){
        List<FootWear> footWearList = footWearService.GetAllFootWear();

        return ResponseEntity.status(HttpStatusCode.valueOf(200)).body(footWearList);
    }

    @GetMapping("/getFootWear/{type}")
    public ResponseEntity<List<FootWear>> fetchByType(@PathVariable FootWearType type){
        List<FootWear> footWearList = footWearService.GetFootWearByType(type);

        return ResponseEntity.status(HttpStatusCode.valueOf(200)).body(footWearList);
    }
    
    @GetMapping("/getFootWear/type/{type}/{footWearId}")
    public ResponseEntity<FootWear> fetchByTypeandId(@PathVariable FootWearType type,@PathVariable int footWearId){
    	List<FootWear> footWearList = footWearService.GetFootWearByType(type);
    	FootWear footWear = footWearService.GetFootWearBYId(footWearId);
    	return ResponseEntity.status(HttpStatusCode.valueOf(200)).body(footWear);
    }
    
    @GetMapping("/getFootWear/suitableFor/{suitable}")
    public ResponseEntity<List<FootWear>> fetchBySuitable(@PathVariable Suitable suitable){
    	List<FootWear> footWearList = footWearService.GetFootWearBySuitable(suitable);
    	return ResponseEntity.status(HttpStatusCode.valueOf(200)).body(footWearList);
    }

}
