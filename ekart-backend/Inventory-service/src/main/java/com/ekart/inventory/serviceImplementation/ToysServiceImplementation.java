package com.ekart.inventory.serviceImplementation;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ekart.inventory.entity.Toys;
import com.ekart.inventory.repository.ToysRepository;
import com.ekart.inventory.service.ToysService;

@Service
public class ToysServiceImplementation implements ToysService {

    @Autowired
    private ToysRepository toysRepository;

    @Override
    public String addToys(Toys toys) {
        toysRepository.save(toys);
        return "Toy added";
    }

    @Override
    public List<Toys> getAllToys() {
        return toysRepository.findAll();
    }

    @Override
    public Toys getToyById(int id) {
        Toys toy = toysRepository.findById(id).get();
        return toy;
    }
}
