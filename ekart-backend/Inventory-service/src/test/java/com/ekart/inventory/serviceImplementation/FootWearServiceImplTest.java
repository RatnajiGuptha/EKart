package com.ekart.inventory.serviceImplementation;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;

import com.ekart.inventory.entity.FootWear;
import com.ekart.inventory.enums.FootWearSize;
import com.ekart.inventory.enums.FootWearType;
import com.ekart.inventory.enums.Suitable;
import com.ekart.inventory.repository.FootWearRepository;

@SpringBootTest
class FootWearServiceImplTest {

	@Mock
	private FootWearRepository footWearRepo;

	@InjectMocks
	FootWearServiceImpl footImpl;

	@Test
	public void addFootWearTest() {

		FootWear footWear = new FootWear(1, "Nike sneakers",
				"https://res.cloudinary.com/dx7zsxo2g/image/upload/v1683694788/shoes-1.1_wtlcpa.png", 1999,
				"Sneakers suitable for both men and women form U.S.POLO ASSN.", "Nike", FootWearType.Shoes,
				FootWearSize.UK_9, Suitable.Unisex, "11-05-2023",
				"https://res.cloudinary.com/dx7zsxo2g/image/upload/v1683694788/shoes-1.1_wtlcpa.png",
				"https://res.cloudinary.com/dx7zsxo2g/image/upload/v1683694788/shoes-1.2_cxaxos.webp",
				"https://res.cloudinary.com/dx7zsxo2g/image/upload/v1683694788/shoes-1.3_qadivd.webp",
				"https://res.cloudinary.com/dx7zsxo2g/image/upload/v1683694789/shoes-1.4_mxnksl.png",
				"https://res.cloudinary.com/dx7zsxo2g/image/upload/v1683772371/shoes-1.5_ohqf3a.png", "White",
				"Nike pvt Ltd", 30);

		when(footWearRepo.save(footWear)).thenReturn(footWear);
		assertEquals("Fottware added", footImpl.PostFootWare(footWear));
	}

	@Test
	public void getAllFootWearTest() {
		FootWear footWear = new FootWear(1, "Nike sneakers",
				"https://res.cloudinary.com/dx7zsxo2g/image/upload/v1683694788/shoes-1.1_wtlcpa.png", 1999,
				"Sneakers suitable for both men and women form U.S.POLO ASSN.", "Nike", FootWearType.Shoes,
				FootWearSize.UK_9, Suitable.Unisex, "11-05-2023",
				"https://res.cloudinary.com/dx7zsxo2g/image/upload/v1683694788/shoes-1.1_wtlcpa.png",
				"https://res.cloudinary.com/dx7zsxo2g/image/upload/v1683694788/shoes-1.2_cxaxos.webp",
				"https://res.cloudinary.com/dx7zsxo2g/image/upload/v1683694788/shoes-1.3_qadivd.webp",
				"https://res.cloudinary.com/dx7zsxo2g/image/upload/v1683694789/shoes-1.4_mxnksl.png",
				"https://res.cloudinary.com/dx7zsxo2g/image/upload/v1683772371/shoes-1.5_ohqf3a.png", "White",
				"Nike pvt Ltd", 30);
		List<FootWear> list = new ArrayList<FootWear>();
		list.add(footWear);
		when(footWearRepo.findAll()).thenReturn(list);
		assertEquals(1, footImpl.GetAllFootWear().size());
	}

	@Test
	public void getFootWearByIdTest() {
		FootWear footWear = new FootWear(1, "Nike sneakers",
				"https://res.cloudinary.com/dx7zsxo2g/image/upload/v1683694788/shoes-1.1_wtlcpa.png", 1999,
				"Sneakers suitable for both men and women form U.S.POLO ASSN.", "Nike", FootWearType.Shoes,
				FootWearSize.UK_9, Suitable.Unisex, "11-05-2023",
				"https://res.cloudinary.com/dx7zsxo2g/image/upload/v1683694788/shoes-1.1_wtlcpa.png",
				"https://res.cloudinary.com/dx7zsxo2g/image/upload/v1683694788/shoes-1.2_cxaxos.webp",
				"https://res.cloudinary.com/dx7zsxo2g/image/upload/v1683694788/shoes-1.3_qadivd.webp",
				"https://res.cloudinary.com/dx7zsxo2g/image/upload/v1683694789/shoes-1.4_mxnksl.png",
				"https://res.cloudinary.com/dx7zsxo2g/image/upload/v1683772371/shoes-1.5_ohqf3a.png", "White",
				"Nike pvt Ltd", 30);
		when(footWearRepo.findByFootWearId(1)).thenReturn(footWear);
		assertEquals(1, footImpl.GetFootWearBYId(1).getFootWearId());

	}

}
