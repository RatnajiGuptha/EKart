package com.ekart.inventory.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.ekart.inventory.entity.FootWear;
import com.ekart.inventory.enums.FootWearSize;
import com.ekart.inventory.enums.FootWearType;
import com.ekart.inventory.enums.Suitable;

@Service
public interface FootWearService {

	public String PostFootWare(FootWear footWearList);

	public List<FootWear> GetAllFootWear();

	public FootWear GetFootWearBYId(int Id);

	public List<FootWear> GetFootWearByType(FootWearType footWearType);

	public List<FootWear> GetFootWearBySize(FootWearSize footWearSize);

	public List<FootWear> GetFootWearBySuitable(Suitable suitable);

	public FootWear getFootWearByTypeAndId(FootWearType type, int footWearId);

	public List<FootWear> GetFootWearBySellerName(String sellerName);

}
