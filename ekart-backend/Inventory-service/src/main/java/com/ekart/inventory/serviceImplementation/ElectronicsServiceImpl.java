package com.ekart.inventory.serviceImplementation;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ekart.inventory.entity.ElectronicsProducts;
import com.ekart.inventory.enums.ElectronicsTypes;
import com.ekart.inventory.repository.ElectronicsRepository;
import com.ekart.inventory.service.ElectronicsService;

@Service
public class ElectronicsServiceImpl implements ElectronicsService{

	@Autowired
	private ElectronicsRepository electronicsRepo;
	@Override
	public void saveElectronics(ElectronicsProducts product) {
		electronicsRepo.save(product);
	}

	@Override
	public List<ElectronicsProducts> fetchAllElectronics() {
		List<ElectronicsProducts> electronicsProducts = electronicsRepo.findAll();
		return electronicsProducts;
	}

	@Override
	public ElectronicsProducts fetchByElectronicsId(int id) {
		ElectronicsProducts product = electronicsRepo.findById(id).get();
		return product;
	}

	@Override
	public List<ElectronicsProducts> fetchByElectronicsType(ElectronicsTypes type) {
		List<ElectronicsProducts> electronicsProductsByType = electronicsRepo.findByType(type);
		return electronicsProductsByType;
	}

	@Override
	public List<ElectronicsProducts> GetElectronicsBySellerName(String sellerName) {
		List<ElectronicsProducts> electronicsProductsBySellerName = electronicsRepo.findBySellerName(sellerName);
		return electronicsProductsBySellerName;
	}

	

}
