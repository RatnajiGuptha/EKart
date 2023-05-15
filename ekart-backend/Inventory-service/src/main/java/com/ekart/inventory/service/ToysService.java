package com.ekart.inventory.service;

import com.ekart.inventory.entity.Toys;

import java.util.List;

public interface ToysService {
    String addToys(Toys toys);

    List<Toys> getAllToys();

    Toys getToyById(int id);
}
