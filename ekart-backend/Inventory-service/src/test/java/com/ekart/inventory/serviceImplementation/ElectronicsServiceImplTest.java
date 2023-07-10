package com.ekart.inventory.serviceImplementation;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;

import com.ekart.inventory.entity.ElectronicsProducts;
import com.ekart.inventory.enums.ElectronicsTypes;
import com.ekart.inventory.repository.ElectronicsRepository;

@SpringBootTest
class ElectronicsServiceImplTest {

	@Mock
	private ElectronicsRepository electronicsRepo;

	@InjectMocks
	ElectronicsServiceImpl electronicsImpl;

	@Test
	public void saveElectronicsTest() {

		ElectronicsProducts product = new ElectronicsProducts(1, "HP Laptop",
				"https://res.cloudinary.com/dx7zsxo2g/image/upload/v1683880580/electronics-1.1_ji0vho.jpg", 25000,
				"HP 15s,11th Gen Intel Core i3-1115G4 8GB RAM/512GB SSD 15.6-inch(39.6 cm) Micro-Edge Anti-Glare FHD Laptop/Alexa Built-in/Win 11/Intel UHD Graphics/Dual Speakers/MS Office 2021/1.69 Kg, 15s-fq2673TU",
				"HP", ElectronicsTypes.Laptops, "512GB/4GB", "12-05-2023",
				"https://res.cloudinary.com/dx7zsxo2g/image/upload/v1683880580/electronics-1.1_ji0vho.jpg",
				"https://res.cloudinary.com/dx7zsxo2g/image/upload/v1683880582/electronics-1.2_bpagnt.jpg",
				"https://res.cloudinary.com/dx7zsxo2g/image/upload/v1683880580/electronics-1.3_nyu5jo.jpg",
				"https://res.cloudinary.com/dx7zsxo2g/image/upload/v1683880581/electronics-1.4_t6w1sg.jpg",
				"https://res.cloudinary.com/dx7zsxo2g/image/upload/v1683880581/electronics-1.5_obcrbd.jpg",
				"Natural Silver", "Dwantech Electronics pvt Ltd", 49);
		when(electronicsRepo.save(product)).thenReturn(product);
		assertEquals(product, electronicsImpl.saveElectronics(product));
	}

	@Test
	public void getAllElectronicsTest() {
		ElectronicsProducts product1 = new ElectronicsProducts(1, "HP Laptop",
				"https://res.cloudinary.com/dx7zsxo2g/image/upload/v1683880580/electronics-1.1_ji0vho.jpg", 25000,
				"HP 15s,11th Gen Intel Core i3-1115G4 8GB RAM/512GB SSD 15.6-inch(39.6 cm) Micro-Edge Anti-Glare FHD Laptop/Alexa Built-in/Win 11/Intel UHD Graphics/Dual Speakers/MS Office 2021/1.69 Kg, 15s-fq2673TU",
				"HP", ElectronicsTypes.Laptops, "512GB/4GB", "12-05-2023",
				"https://res.cloudinary.com/dx7zsxo2g/image/upload/v1683880580/electronics-1.1_ji0vho.jpg",
				"https://res.cloudinary.com/dx7zsxo2g/image/upload/v1683880582/electronics-1.2_bpagnt.jpg",
				"https://res.cloudinary.com/dx7zsxo2g/image/upload/v1683880580/electronics-1.3_nyu5jo.jpg",
				"https://res.cloudinary.com/dx7zsxo2g/image/upload/v1683880581/electronics-1.4_t6w1sg.jpg",
				"https://res.cloudinary.com/dx7zsxo2g/image/upload/v1683880581/electronics-1.5_obcrbd.jpg",
				"Natural Silver", "Dwantech Electronics pvt Ltd", 49);

		List<ElectronicsProducts> list = new ArrayList<ElectronicsProducts>();
		list.add(product1);
		when(electronicsRepo.findAll()).thenReturn(list);
		assertEquals(1, electronicsImpl.fetchAllElectronics().size());
	}

	@Test
	public void getElectronicsByIdTest() {
		Optional<ElectronicsProducts> product1 = Optional.ofNullable(new ElectronicsProducts(1, "HP Laptop",
				"https://res.cloudinary.com/dx7zsxo2g/image/upload/v1683880580/electronics-1.1_ji0vho.jpg", 25000,
				"HP 15s,11th Gen Intel Core i3-1115G4 8GB RAM/512GB SSD 15.6-inch(39.6 cm) Micro-Edge Anti-Glare FHD Laptop/Alexa Built-in/Win 11/Intel UHD Graphics/Dual Speakers/MS Office 2021/1.69 Kg, 15s-fq2673TU",
				"HP", ElectronicsTypes.Laptops, "512GB/4GB", "12-05-2023",
				"https://res.cloudinary.com/dx7zsxo2g/image/upload/v1683880580/electronics-1.1_ji0vho.jpg",
				"https://res.cloudinary.com/dx7zsxo2g/image/upload/v1683880582/electronics-1.2_bpagnt.jpg",
				"https://res.cloudinary.com/dx7zsxo2g/image/upload/v1683880580/electronics-1.3_nyu5jo.jpg",
				"https://res.cloudinary.com/dx7zsxo2g/image/upload/v1683880581/electronics-1.4_t6w1sg.jpg",
				"https://res.cloudinary.com/dx7zsxo2g/image/upload/v1683880581/electronics-1.5_obcrbd.jpg",
				"Natural Silver", "Dwantech Electronics pvt Ltd", 49));
		when(electronicsRepo.findById(1)).thenReturn(product1);
		assertEquals(1, electronicsImpl.fetchByElectronicsId(1).getElectronicsId());
	}

}
