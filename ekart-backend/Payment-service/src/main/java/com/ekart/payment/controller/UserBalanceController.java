package com.ekart.payment.controller;

import com.ekart.payment.Repository.UserBalanceRepository;
import com.ekart.payment.entity.UserBalance;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/userBalance")
public class UserBalanceController {

    @Autowired
    private UserBalanceRepository userBalanceRepository;

    @PostMapping("/add")
    public String saveUserBalance(@RequestBody UserBalance userBalance){
        userBalanceRepository.save(userBalance);
        return "Balnce Saved";
    }

    @GetMapping("/getUserBalance")
    public List<UserBalance> getUserBalance(){
        return userBalanceRepository.findAll();
    }
}
