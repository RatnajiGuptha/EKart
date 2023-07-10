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

import com.ekart.inventory.entity.Beauty;
import com.ekart.inventory.repository.BeautyRepository;

@SpringBootTest
class BeautyServiceImplementationTest {

	@Mock
	private BeautyRepository beautyRepo;

	@InjectMocks
	BeautyServiceImplementation beautyImpl;

	@Test
	public void addBeautyProductsTest() {
		Beauty product = new Beauty(1, "Lakme  Hair Gel",
				"https://res.cloudinary.com/dx7zsxo2g/image/upload/v1684141181/beauty1.1_p9etzg.png", 492,
				"Men Ultimate Maximum Hold Styling Hair Gel - 250 ml", "Lakme ", "Beauty", "Men", "02-05-2023",
				"150 ml", "https://res.cloudinary.com/dx7zsxo2g/image/upload/v1684141183/beauty2.1_oz3yvu.png",
				"https://res.cloudinary.com/dx7zsxo2g/image/upload/v1684141182/beauty2.2_d99lax.png",
				"https://res.cloudinary.com/dx7zsxo2g/image/upload/v1684141184/beauty2.3_gwe5uc.png",
				"https://res.cloudinary.com/dx7zsxo2g/image/upload/v1684141183/beauty2.4_bijawc.png", "Lakme pvt Ltd",
				129);

		when(beautyRepo.save(product)).thenReturn(product);
		assertEquals("Beauty Products added", beautyImpl.addBeautyProducts(product));
	}

	@Test
	public void getBeautyProductsTest() {
		Beauty product1 = new Beauty(1, "Lakme  Hair Gel",
				"https://res.cloudinary.com/dx7zsxo2g/image/upload/v1684141181/beauty1.1_p9etzg.png", 492,
				"Men Ultimate Maximum Hold Styling Hair Gel - 250 ml", "Lakme ", "Beauty", "Men", "02-05-2023",
				"150 ml", "https://res.cloudinary.com/dx7zsxo2g/image/upload/v1684141183/beauty2.1_oz3yvu.png",
				"https://res.cloudinary.com/dx7zsxo2g/image/upload/v1684141182/beauty2.2_d99lax.png",
				"https://res.cloudinary.com/dx7zsxo2g/image/upload/v1684141184/beauty2.3_gwe5uc.png",
				"https://res.cloudinary.com/dx7zsxo2g/image/upload/v1684141183/beauty2.4_bijawc.png", "Lakme pvt Ltd",
				129);
		Beauty product2 = new Beauty(2, "Lakme  Hair Gel",
				"https://res.cloudinary.com/dx7zsxo2g/image/upload/v1684141181/beauty1.1_p9etzg.png", 492,
				"Men Ultimate Maximum Hold Styling Hair Gel - 250 ml", "Lakme ", "Beauty", "Men", "02-05-2023",
				"150 ml", "https://res.cloudinary.com/dx7zsxo2g/image/upload/v1684141183/beauty2.1_oz3yvu.png",
				"https://res.cloudinary.com/dx7zsxo2g/image/upload/v1684141182/beauty2.2_d99lax.png",
				"https://res.cloudinary.com/dx7zsxo2g/image/upload/v1684141184/beauty2.3_gwe5uc.png",
				"https://res.cloudinary.com/dx7zsxo2g/image/upload/v1684141183/beauty2.4_bijawc.png", "Lakme pvt Ltd",
				129);

		List<Beauty> list = new ArrayList<Beauty>();
		list.add(product1);
		list.add(product2);

		when(beautyRepo.findAll()).thenReturn(list);
		assertEquals(2, beautyImpl.getAllBeautyProducts().size());
	}

	@Test
	public void getBeautyByIdTest() {
		Optional<Beauty> product = Optional.ofNullable(new Beauty(1, "Lakme  Hair Gel",
				"https://res.cloudinary.com/dx7zsxo2g/image/upload/v1684141181/beauty1.1_p9etzg.png", 492,
				"Men Ultimate Maximum Hold Styling Hair Gel - 250 ml", "Lakme ", "Beauty", "Men", "02-05-2023",
				"150 ml", "https://res.cloudinary.com/dx7zsxo2g/image/upload/v1684141183/beauty2.1_oz3yvu.png",
				"https://res.cloudinary.com/dx7zsxo2g/image/upload/v1684141182/beauty2.2_d99lax.png",
				"https://res.cloudinary.com/dx7zsxo2g/image/upload/v1684141184/beauty2.3_gwe5uc.png",
				"https://res.cloudinary.com/dx7zsxo2g/image/upload/v1684141183/beauty2.4_bijawc.png", "Lakme pvt Ltd",
				129));

		when(beautyRepo.findById(1)).thenReturn(product);
//		System.out.println(beautyImpl.getBeautyById(1));
		assertEquals(1, beautyImpl.getBeautyById(1).getBeautyId());
	}

}
