package com.ekart.inventory.entity;

import com.ekart.inventory.enums.FashionTypes;
import com.ekart.inventory.enums.Size;
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
	private Integer fashionId;
	private String productName;
	private String logoImg;

	private int productPrice;
	private String productDescription;
	private String brandName;

	@Enumerated(EnumType.STRING)
	private FashionTypes type;

	@Enumerated(EnumType.STRING)
	private Suitable suitablefor;

	private String manufactureDate;
	
	@Enumerated(EnumType.STRING)
	private Size size;

	private String productImg1;
	private String productImg2;
	private String productImg3;
	private String productImg4;
	private String productImg5;

	private String color;
	private String sellerName;

	private int qty;

}
