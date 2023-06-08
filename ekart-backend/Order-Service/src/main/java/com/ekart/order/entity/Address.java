package com.ekart.order.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
//@Component
public class Address {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public int addressId;
	public String userName;
	public String receiverName;
	public String receiverPhoneNumber;
	public String buildingNo;
	public String street1;
	public String city;
	public String district;
	public String state;
	public int pincode;
}
