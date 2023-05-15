package com.ekart.inventory.service;

import java.util.List;

import com.ekart.inventory.entity.Toys;

public interface ToysService {
    String addToys(Toys toys);

    List<Toys> getAllToys();

    Toys getToyById(int id);
}
