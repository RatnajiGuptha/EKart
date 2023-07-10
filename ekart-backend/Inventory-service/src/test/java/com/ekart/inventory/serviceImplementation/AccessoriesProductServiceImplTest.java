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

import com.ekart.inventory.entity.AccessoriesProducts;
import com.ekart.inventory.enums.AccessoriesTypes;
import com.ekart.inventory.enums.Size;
import com.ekart.inventory.enums.Suitable;
import com.ekart.inventory.repository.AccessoriesProductsRepository;

@SpringBootTest
class AccessoriesProductServiceImplTest {

	@Mock
	private AccessoriesProductsRepository accessoryRepo;

	@InjectMocks
	AccessoriesProductServiceImpl accessoryImpl;

	@Test
	public void addAccessoryProductTest() {

		AccessoriesProducts product = new AccessoriesProducts(1, "Bevogue Necklace",
				"https://res.cloudinary.com/dx7zsxo2g/image/upload/v1683635707/jewellery1.1_ksg6ub.png", 1346,
				"BV726388 Gold-Plated Necklace with White stones", "Bevogue", AccessoriesTypes.Jewellery,
				Suitable.Female, "02-05-2023", Size.FreeSize,
				"https://res.cloudinary.com/dx7zsxo2g/image/upload/v1683635707/jewellery1.1_ksg6ub.png",
				"https://res.cloudinary.com/dx7zsxo2g/image/upload/v1683635707/jewellery1.2_naxm5y.png",
				"https://res.cloudinary.com/dx7zsxo2g/image/upload/v1683635707/jewellery1.3_lznk21.png",
				"https://res.cloudinary.com/dx7zsxo2g/image/upload/v1683635708/jewellery1.4_qgptwg.png",
				"https://res.cloudinary.com/dx7zsxo2g/image/upload/v1683771878/jewellery1.5_cwtbvt.png", "Pink",
				"Bevogue pvt Ltd", 32);
		when(accessoryRepo.save(product)).thenReturn(product);
		assertEquals(product, accessoryImpl.saveAccessoriesProducts(product));

	}

	@Test
	public void getAllAccessoryProductsTest() {
		AccessoriesProducts product = new AccessoriesProducts(1, "Bevogue Necklace",
				"https://res.cloudinary.com/dx7zsxo2g/image/upload/v1683635707/jewellery1.1_ksg6ub.png", 1346,
				"BV726388 Gold-Plated Necklace with White stones", "Bevogue", AccessoriesTypes.Jewellery,
				Suitable.Female, "02-05-2023", Size.FreeSize,
				"https://res.cloudinary.com/dx7zsxo2g/image/upload/v1683635707/jewellery1.1_ksg6ub.png",
				"https://res.cloudinary.com/dx7zsxo2g/image/upload/v1683635707/jewellery1.2_naxm5y.png",
				"https://res.cloudinary.com/dx7zsxo2g/image/upload/v1683635707/jewellery1.3_lznk21.png",
				"https://res.cloudinary.com/dx7zsxo2g/image/upload/v1683635708/jewellery1.4_qgptwg.png",
				"https://res.cloudinary.com/dx7zsxo2g/image/upload/v1683771878/jewellery1.5_cwtbvt.png", "Pink",
				"Bevogue pvt Ltd", 32);
		List<AccessoriesProducts> list = new ArrayList<AccessoriesProducts>();
		list.add(product);
		when(accessoryRepo.findAll()).thenReturn(list);
		assertEquals(1, accessoryImpl.getAccessoriesProducts().size());
	}

	@Test
	public void getAccessoryProductByIdTest() {
		Optional<AccessoriesProducts> product = Optional.ofNullable(new AccessoriesProducts(1, "Bevogue Necklace",
				"https://res.cloudinary.com/dx7zsxo2g/image/upload/v1683635707/jewellery1.1_ksg6ub.png", 1346,
				"BV726388 Gold-Plated Necklace with White stones", "Bevogue", AccessoriesTypes.Jewellery,
				Suitable.Female, "02-05-2023", Size.FreeSize,
				"https://res.cloudinary.com/dx7zsxo2g/image/upload/v1683635707/jewellery1.1_ksg6ub.png",
				"https://res.cloudinary.com/dx7zsxo2g/image/upload/v1683635707/jewellery1.2_naxm5y.png",
				"https://res.cloudinary.com/dx7zsxo2g/image/upload/v1683635707/jewellery1.3_lznk21.png",
				"https://res.cloudinary.com/dx7zsxo2g/image/upload/v1683635708/jewellery1.4_qgptwg.png",
				"https://res.cloudinary.com/dx7zsxo2g/image/upload/v1683771878/jewellery1.5_cwtbvt.png", "Pink",
				"Bevogue pvt Ltd", 32));
		when(accessoryRepo.findById(1)).thenReturn(product);
		assertEquals(1, accessoryImpl.getAccessoriesProductById(1).getAccessoryId());
	}

}
