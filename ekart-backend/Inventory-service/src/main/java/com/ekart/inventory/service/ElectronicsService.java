package com.ekart.inventory.service;

import java.util.List;

import com.ekart.inventory.entity.ElectronicsProducts;
import com.ekart.inventory.enums.ElectronicsTypes;

public interface ElectronicsService {

	public void saveElectronics(ElectronicsProducts product);

	public List<ElectronicsProducts> fetchAllElectronics();

	public ElectronicsProducts fetchByElectronicsId(int id);

	public List<ElectronicsProducts> fetchByElectronicsType(ElectronicsTypes type);

	public List<ElectronicsProducts> GetElectronicsBySellerName(String sellerName);

	public String saveSellerElectronicProducts(ElectronicsProducts updateElectronicsProducts);

}
