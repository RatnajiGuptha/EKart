package com.ekart.inventory.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ekart.inventory.entity.Toys;

public interface ToysRepository extends JpaRepository<Toys,Integer> {
}
