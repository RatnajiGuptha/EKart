package com.ekart.inventory.service;

import com.ekart.inventory.entity.FootWear;
import com.ekart.inventory.enums.FootWearSize;
import com.ekart.inventory.enums.FootWearType;
import com.ekart.inventory.enums.Suitable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface FootWearService {

    public String PostFootWare(FootWear footWearList);

    public List<FootWear> GetAllFootWear();

    public List<FootWear> GetFootWearBYId(int Id);

    public List<FootWear> GetFootWearByType(FootWearType footWearType);
    public List<FootWear> GetFootWearBySize(FootWearSize footWearSize);

    public List<FootWear> GetFootWearBySuitable(Suitable suitable);


}
