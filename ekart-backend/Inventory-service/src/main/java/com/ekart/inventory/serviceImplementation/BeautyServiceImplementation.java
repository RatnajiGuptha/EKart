package com.ekart.inventory.serviceImplementation;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ekart.inventory.entity.Beauty;
import com.ekart.inventory.repository.BeautyRepository;
import com.ekart.inventory.service.BeautyService;

@Service
public class BeautyServiceImplementation implements BeautyService {

    @Autowired
    private BeautyRepository beautyRepository;

	@Override
	public String addBeautyProducts(Beauty beauty) {
		beautyRepository.save(beauty);
		return "Beauty Products added";
	}

	@Override
	public List<Beauty> getAllBeautyProducts() {
		return beautyRepository.findAll();
	}

	@Override
	public Beauty getBeautyById(int id) {
		Beauty beauty = beautyRepository.findById(id).get();
        return beauty;
	}

	@Override
	public List<Beauty> getBeautyBySellerName(String sellerName) {
		List<Beauty> beautyProducts=beautyRepository.findBeautyBySellerName(sellerName);
		return beautyProducts;
	}
}
