package com.ekart.inventory.serviceImplementation;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ekart.inventory.entity.FootWear;
import com.ekart.inventory.enums.FootWearSize;
import com.ekart.inventory.enums.FootWearType;
import com.ekart.inventory.enums.Suitable;
import com.ekart.inventory.repository.FootWearRepository;
import com.ekart.inventory.service.FootWearService;

import io.micrometer.observation.annotation.Observed;

@Service
public class FootWearServiceImpl implements FootWearService {

	@Autowired
	private FootWearRepository footWearRepository;

	@Override
	@Observed(name="add.footwear")
	public String PostFootWare(FootWear footWear) {
		footWearRepository.save(footWear);
		return "Fottware added";
	}

	@Override
	@Observed(name="get.allFootwear")
	public List<FootWear> GetAllFootWear() {
		List<FootWear> footWearList = footWearRepository.findAll();
		return footWearList;
	}

	@Override
	@Observed(name="get.footwearById")
	public FootWear GetFootWearBYId(int Id) {
		FootWear footWear = footWearRepository.findByFootWearId(Id);
		return footWear;
	}

	@Override
	@Observed(name="get.footwearByType")
	public List<FootWear> GetFootWearByType(FootWearType footWearType) {
		List<FootWear> footWearList = footWearRepository.findByType(footWearType);
		return footWearList;
	}

	@Override
	@Observed(name="get.footwearByTypeAndId")
	public FootWear getFootWearByTypeAndId(FootWearType type, int footWearId) {
		FootWear footWear = footWearRepository.findByTypeAndFootWearId(type,footWearId);
		return footWear;
	}

	@Override
	@Observed(name="get.footwearBySize")
	public List<FootWear> GetFootWearBySize(FootWearSize footWearSize) {
		List<FootWear> footWearList = footWearRepository.findBySize(footWearSize);
		return footWearList;
	}

	@Override
	@Observed(name="get.footwearBySuitable")
	public List<FootWear> GetFootWearBySuitable(Suitable suitable) {
		List<FootWear> footWearList = footWearRepository.findBySuitablefor(suitable);
		return footWearList;
	}

	@Override
	@Observed(name="get.footwearBySellername")
	public List<FootWear> GetFootWearBySellerName(String sellerName) {
		List<FootWear> footWearList = footWearRepository.findBySellerName(sellerName);
		return footWearList;
	}

	@Override
	@Observed(name="update.sellerFootwear")
	public String saveSellerFootWearProducts(FootWear updateFootWearProducts) {
		footWearRepository.save(updateFootWearProducts);
		return "seller footwear products saved";
	}
	
	@Override
	@Observed(name="get.footwearBySellerNameAndType")
	public List<FootWear> GetFootWearBySellerNameAndType(String sellerName, FootWearType type) {
		List<FootWear>footWearList = footWearRepository.findBySellerNameAndType(sellerName,type);
		return footWearList;
	}

}
