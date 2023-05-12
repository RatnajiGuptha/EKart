package com.ekart.inventory.controller;

import com.ekart.inventory.entity.FootWear;
import com.ekart.inventory.service.FootWearService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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
    public ResponseEntity<List<FootWear>> FetchFootWare(){
        List<FootWear> footWearList = footWearService.GetAllFootWear();

        return ResponseEntity.status(HttpStatusCode.valueOf(200)).body(footWearList);
    }
}
