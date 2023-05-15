package com.ekart.inventory.repository;

import com.ekart.inventory.entity.FootWear;
import com.ekart.inventory.enums.FootWearSize;
import com.ekart.inventory.enums.FootWearType;
import com.ekart.inventory.enums.Suitable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface FootWearRepository extends JpaRepository<FootWear, Integer> {
    FootWear findByFootWearId(int id);

    List<FootWear> findByType(FootWearType footWearType);

    List<FootWear> findBySize(FootWearSize footWearSize);

    List<FootWear> findBySuitablefor(Suitable suitable);
}
