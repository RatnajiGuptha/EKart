package com.ekart.inventory.serviceImplementation;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.slf4j.Logger;
import org.springframework.boot.test.context.SpringBootTest;

import com.ekart.inventory.entity.FashionProducts;
import com.ekart.inventory.enums.FashionTypes;
import com.ekart.inventory.enums.Size;
import com.ekart.inventory.enums.Suitable;
import com.ekart.inventory.repository.FashionProductsRepository;

@SpringBootTest
class FashionProductServiceImplTest {

	@Mock
	private FashionProductsRepository fashionProductsRepo;

	@InjectMocks
	FashionProductServiceImpl fashImpl;

	@Mock
	Logger logger;

	@Test
	public void addFashionProductTest() {
		FashionProducts product = new FashionProducts(1, "Raymond Formal Suit",
				"https://res.cloudinary.com/dx7zsxo2g/image/upload/v1684406323/suits-1.1_m7oqwp.png", 1399,
				"Men Slim Fit Self-Design Textured Notched Lapel Single-Breasted Formal Suit", "Raymond",
				FashionTypes.Suits, Suitable.Male, "12-12-2021", Size.L,
				"https://res.cloudinary.com/dx7zsxo2g/image/upload/v1684406323/suits-1.1_m7oqwp.png",
				"https://res.cloudinary.com/dx7zsxo2g/image/upload/v1684406324/suits-1.2_bnhlus.png",
				"https://res.cloudinary.com/dx7zsxo2g/image/upload/v1684406325/suits-1.3_oae5dj.png",
				"https://res.cloudinary.com/dx7zsxo2g/image/upload/v1684406325/suits-1.4_t1ltit.png",
				"https://res.cloudinary.com/dx7zsxo2g/image/upload/v1684406325/suits-1.5_l69kmf.png", "Blue",
				"Raymond private Ltd", 100);

		System.out.println(product);
		when(fashionProductsRepo.save(product)).thenReturn(product);
		assertEquals("Item saved", fashImpl.saveFashionProduct(product));

	}

	@Test
	public void getFashionProductsTest() {
		FashionProducts product = new FashionProducts(1, "Raymond Formal Suit",
				"https://res.cloudinary.com/dx7zsxo2g/image/upload/v1684406323/suits-1.1_m7oqwp.png", 1399,
				"Men Slim Fit Self-Design Textured Notched Lapel Single-Breasted Formal Suit", "Raymond",
				FashionTypes.Suits, Suitable.Male, "12-12-2021", Size.L,
				"https://res.cloudinary.com/dx7zsxo2g/image/upload/v1684406323/suits-1.1_m7oqwp.png",
				"https://res.cloudinary.com/dx7zsxo2g/image/upload/v1684406324/suits-1.2_bnhlus.png",
				"https://res.cloudinary.com/dx7zsxo2g/image/upload/v1684406325/suits-1.3_oae5dj.png",
				"https://res.cloudinary.com/dx7zsxo2g/image/upload/v1684406325/suits-1.4_t1ltit.png",
				"https://res.cloudinary.com/dx7zsxo2g/image/upload/v1684406325/suits-1.5_l69kmf.png", "Blue",
				"Raymond private Ltd", 100);
		List<FashionProducts> list = new ArrayList<FashionProducts>();
		list.add(product);
		when(fashionProductsRepo.findAll()).thenReturn(list);
		System.out.println(fashImpl.loadFashionProducts().size());
		assertEquals(1, fashImpl.loadFashionProducts().size());
	}

	@Test
	public void getFashionProductByIdTest() {
		Optional<FashionProducts> product = Optional.ofNullable(new FashionProducts(1, "Raymond Formal Suit",
				"https://res.cloudinary.com/dx7zsxo2g/image/upload/v1684406323/suits-1.1_m7oqwp.png", 1399,
				"Men Slim Fit Self-Design Textured Notched Lapel Single-Breasted Formal Suit", "Raymond",
				FashionTypes.Suits, Suitable.Male, "12-12-2021", Size.L,
				"https://res.cloudinary.com/dx7zsxo2g/image/upload/v1684406323/suits-1.1_m7oqwp.png",
				"https://res.cloudinary.com/dx7zsxo2g/image/upload/v1684406324/suits-1.2_bnhlus.png",
				"https://res.cloudinary.com/dx7zsxo2g/image/upload/v1684406325/suits-1.3_oae5dj.png",
				"https://res.cloudinary.com/dx7zsxo2g/image/upload/v1684406325/suits-1.4_t1ltit.png",
				"https://res.cloudinary.com/dx7zsxo2g/image/upload/v1684406325/suits-1.5_l69kmf.png", "Blue",
				"Raymond private Ltd", 100));

		when(fashionProductsRepo.findById(1)).thenReturn(product);
		assertEquals(1, fashImpl.fetchById(1).getFashionId());
	}

}
