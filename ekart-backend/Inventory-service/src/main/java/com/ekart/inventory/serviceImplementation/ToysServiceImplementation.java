package com.ekart.inventory.serviceImplementation;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ekart.inventory.entity.Toys;
import com.ekart.inventory.repository.ToysRepository;
import com.ekart.inventory.service.ToysService;

import io.micrometer.observation.annotation.Observed;

@Service
public class ToysServiceImplementation implements ToysService {

    @Autowired
    private ToysRepository toysRepository;

    @Override
    @Observed(name="add.toys")
    public String addToys(Toys toys) {
        toysRepository.save(toys);
        return "Toy added";
    }

    @Override
    @Observed(name="get.allToys")
    public List<Toys> getAllToys() {
        return toysRepository.findAll();
    }

    @Override
    @Observed(name="get.toysById")
    public Toys getToyById(int id) {
        Toys toy = toysRepository.findById(id).get();
        return toy;
    }

	@Override
	@Observed(name="get.toysBySellername")
	public List<Toys> GetToysBySellerName(String sellerName) {
		List<Toys> toys=toysRepository.findToyBySellerName(sellerName);
		return toys;
	}

	@Override
	@Observed(name="update.sellerToys")
	public String saveSellerToys(Toys updateToys) {
		toysRepository.save(updateToys);
		return "seller toy products saved";
	}
}
