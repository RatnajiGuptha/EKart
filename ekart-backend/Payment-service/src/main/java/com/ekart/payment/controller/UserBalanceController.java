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

    @GetMapping("/getBalanceByUserName/{userName}")
    public int getBalanceByName(@PathVariable String userName){
        UserBalance userBalance = userBalanceRepository.findByUserName(userName);

        return userBalance.getPrice();
    }
    
    @PutMapping("/updateBalance/{userName}/{amount}")
    public  String updateUserBalance(@PathVariable String userName,@PathVariable int amount){
        UserBalance ub = userBalanceRepository.findByUserName(userName);
        ub.setPrice(ub.getPrice() + amount);
        userBalanceRepository.save(ub);
        return "user Balance Updated";
    }

}
