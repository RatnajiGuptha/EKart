package com.ekart.inventory.entity;

import java.util.List;

import com.ekart.inventory.enums.FashionTypes;
import com.ekart.inventory.enums.Suitable;

import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class FashionProducts {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int fashionId;
	private String productName;
	private String logoImg;
	
	@Enumerated(EnumType.STRING)
	private FashionTypes type;
	
	@Enumerated(EnumType.STRING)
	private Suitable suitablefor;
	
	private String manufactureDate;
	private String size;
	private List<String> productImages;
	private String color;
	private String sellerName;

}
