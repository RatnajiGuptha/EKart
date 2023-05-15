package com.ekart.inventory.repository;

import com.ekart.inventory.entity.Toys;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ToysRepository extends JpaRepository<Toys,Integer> {
}
