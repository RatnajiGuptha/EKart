package com.ekart.inventory.serviceImplementation;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ekart.inventory.entity.Beauty;
import com.ekart.inventory.repository.BeautyRepository;
import com.ekart.inventory.service.BeautyService;

import io.micrometer.observation.annotation.Observed;

@Service
public class BeautyServiceImplementation implements BeautyService {

    @Autowired
    private BeautyRepository beautyRepository;

	@Override
	@Observed(name="add.beautyProducts")
	public String addBeautyProducts(Beauty beauty) {
		beautyRepository.save(beauty);
		return "Beauty Products added";
	}

	@Override
	@Observed(name="get.beautyProducts")
	public List<Beauty> getAllBeautyProducts() {
		return beautyRepository.findAll();
	}

	@Override
	@Observed(name="get.beautyProductById")
	public Beauty getBeautyById(int id) {
		Beauty beauty = beautyRepository.findById(id).get();
        return beauty;
	}

	@Override
	@Observed(name="get.beautyProductBySellername")
	public List<Beauty> getBeautyBySellerName(String sellerName) {
		List<Beauty> beautyProducts=beautyRepository.findBeautyBySellerName(sellerName);
		return beautyProducts;
	}

	@Override
	@Observed(name="update.sellerBeautyProducts")
	public String saveSellerBeautyProducts(Beauty updateBeautyProducts) {
		beautyRepository.save(updateBeautyProducts);
		return "seller beauty product saved";
	}
}
