package com.ekart.inventory.entity;

import com.ekart.inventory.enums.AccessoriesTypes;
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

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class AccessoriesProducts {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int accessoryId;
	private String productName;
	private String logoImg;
	
	private int productPrice;
	private String productDescription;
	private String brandName;
	
	@Enumerated(EnumType.STRING)
	private AccessoriesTypes type;
	
	@Enumerated(EnumType.STRING)
	private Suitable suitablefor;

	private String manufactureDate;
	
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
