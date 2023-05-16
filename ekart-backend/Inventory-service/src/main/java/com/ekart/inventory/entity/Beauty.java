package com.ekart.inventory.entity;

import jakarta.persistence.Entity;
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
public class Beauty {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int beautyId;
	private String productName;
	private String logoImg;
	
	private int productPrice;
	private String productDescription;
	private String brandName;
	
	
	private String type;
	
	private String suitablefor;

	private String manufactureDate;
	private String size;
	
	private String productImg1;
	private String productImg2;
	private String productImg3;
	private String productImg4;

	
	private String sellerName;
	
	private int qty; 

}
