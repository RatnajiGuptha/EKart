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

import com.ekart.inventory.entity.Toys;
import com.ekart.inventory.enums.Size;
import com.ekart.inventory.repository.ToysRepository;

@SpringBootTest
class ToysServiceImplementationTest {

	@Mock
	private ToysRepository toysRepo;

	@InjectMocks
	ToysServiceImplementation toysImpl;

	@Test
	public void addToysTest() {
		Toys toy = new Toys(1, "Wembley super soft baby dog",
				"https://res.cloudinary.com/dx7zsxo2g/image/upload/v1683878666/toys-1.1_fhzccn.png", 432,
				"scooba super soft fruit dog soft toy 33cm - 33 cm  (Multicolor)", "Wembley ", "Toys", "kids",
				"13-08-2024", Size.FreeSize,
				"https://res.cloudinary.com/dx7zsxo2g/image/upload/v1683878666/toys-1.1_fhzccn.png",
				"https://res.cloudinary.com/dx7zsxo2g/image/upload/v1683878666/toys-1.2_ejzaqd.png",
				"https://res.cloudinary.com/dx7zsxo2g/image/upload/v1683878666/toys-1.3_bymmmt.png",
				"https://res.cloudinary.com/dx7zsxo2g/image/upload/v1683878666/toys-1.4_okr72m.png",
				"https://res.cloudinary.com/dx7zsxo2g/image/upload/v1683878668/toys-1.5_uxkkda.png", "Pink",
				"Wembley pvt Ltd", 49);
		when(toysRepo.save(toy)).thenReturn(toy);
		assertEquals("Toy added", toysImpl.addToys(toy));
	}

	@Test
	public void getAllToysTest() {
		Toys toy = new Toys(1, "Wembley super soft baby dog",
				"https://res.cloudinary.com/dx7zsxo2g/image/upload/v1683878666/toys-1.1_fhzccn.png", 432,
				"scooba super soft fruit dog soft toy 33cm - 33 cm  (Multicolor)", "Wembley ", "Toys", "kids",
				"13-08-2024", Size.FreeSize,
				"https://res.cloudinary.com/dx7zsxo2g/image/upload/v1683878666/toys-1.1_fhzccn.png",
				"https://res.cloudinary.com/dx7zsxo2g/image/upload/v1683878666/toys-1.2_ejzaqd.png",
				"https://res.cloudinary.com/dx7zsxo2g/image/upload/v1683878666/toys-1.3_bymmmt.png",
				"https://res.cloudinary.com/dx7zsxo2g/image/upload/v1683878666/toys-1.4_okr72m.png",
				"https://res.cloudinary.com/dx7zsxo2g/image/upload/v1683878668/toys-1.5_uxkkda.png", "Pink",
				"Wembley pvt Ltd", 49);
		List<Toys> list = new ArrayList<Toys>();
		list.add(toy);
		when(toysRepo.findAll()).thenReturn(list);
		assertEquals(1, toysImpl.getAllToys().size());

	}

	@Test
	public void getToysByIdTest() {
		Optional<Toys> toy = Optional.ofNullable(new Toys(1, "Wembley super soft baby dog",
				"https://res.cloudinary.com/dx7zsxo2g/image/upload/v1683878666/toys-1.1_fhzccn.png", 432,
				"scooba super soft fruit dog soft toy 33cm - 33 cm  (Multicolor)", "Wembley ", "Toys", "kids",
				"13-08-2024", Size.FreeSize,
				"https://res.cloudinary.com/dx7zsxo2g/image/upload/v1683878666/toys-1.1_fhzccn.png",
				"https://res.cloudinary.com/dx7zsxo2g/image/upload/v1683878666/toys-1.2_ejzaqd.png",
				"https://res.cloudinary.com/dx7zsxo2g/image/upload/v1683878666/toys-1.3_bymmmt.png",
				"https://res.cloudinary.com/dx7zsxo2g/image/upload/v1683878666/toys-1.4_okr72m.png",
				"https://res.cloudinary.com/dx7zsxo2g/image/upload/v1683878668/toys-1.5_uxkkda.png", "Pink",
				"Wembley pvt Ltd", 49));

		when(toysRepo.findById(1)).thenReturn(toy);
		assertEquals(1, toysImpl.getToyById(1).getToyId());
	}

}
