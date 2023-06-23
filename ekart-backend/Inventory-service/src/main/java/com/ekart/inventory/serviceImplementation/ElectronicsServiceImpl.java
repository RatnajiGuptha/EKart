package com.ekart.inventory.serviceImplementation;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ekart.inventory.entity.ElectronicsProducts;
import com.ekart.inventory.enums.ElectronicsTypes;
import com.ekart.inventory.repository.ElectronicsRepository;
import com.ekart.inventory.service.ElectronicsService;

import io.micrometer.observation.annotation.Observed;

@Service
public class ElectronicsServiceImpl implements ElectronicsService{

	@Autowired
	private ElectronicsRepository electronicsRepo;
	@Override
	@Observed(name="add.electronicProducts")
	public void saveElectronics(ElectronicsProducts product) {
		electronicsRepo.save(product);
	}

	@Override
	@Observed(name="get.electronicProducts")
	public List<ElectronicsProducts> fetchAllElectronics() {
		List<ElectronicsProducts> electronicsProducts = electronicsRepo.findAll();
		return electronicsProducts;
	}

	@Override
	@Observed(name="get.electronicProductById")
	public ElectronicsProducts fetchByElectronicsId(int id) {
		ElectronicsProducts product = electronicsRepo.findById(id).get();
		return product;
	}

	@Override
	@Observed(name="get.electronicProductsByType")
	public List<ElectronicsProducts> fetchByElectronicsType(ElectronicsTypes type) {
		List<ElectronicsProducts> electronicsProductsByType = electronicsRepo.findByType(type);
		return electronicsProductsByType;
	}

	@Override
	@Observed(name="get.electronicProductsBySellername")
	public List<ElectronicsProducts> GetElectronicsBySellerName(String sellerName) {
		List<ElectronicsProducts> electronicsProductsBySellerName = electronicsRepo.findBySellerName(sellerName);
		return electronicsProductsBySellerName;
	}

	@Override
	@Observed(name="update.electronicProducts")
	public String saveSellerElectronicProducts(ElectronicsProducts updateElectronicsProducts) {
		electronicsRepo.save(updateElectronicsProducts);
		return "seller electronic products saved";
	}
	
	@Override
	@Observed(name="get.electronicProductsBySellernameAndType")
	public List<ElectronicsProducts> GetElectronicsBySellerNameAndType(String sellerName, ElectronicsTypes type) {
		List<ElectronicsProducts> electronicsProductsBySellerName = electronicsRepo.findBySellerNameAndType(sellerName,type);
		return electronicsProductsBySellerName;
	}

	

}
