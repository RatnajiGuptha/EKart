package com.ekart.inventory.service;

import java.util.List;

import com.ekart.inventory.entity.Beauty;

public interface BeautyService {

	String addBeautyProducts(Beauty beauty);

	List<Beauty> getAllBeautyProducts();

	Beauty getBeautyById(int id);

}
