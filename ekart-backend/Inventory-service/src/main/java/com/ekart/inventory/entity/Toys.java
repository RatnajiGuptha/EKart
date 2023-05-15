package com.ekart.inventory.entity;

import com.ekart.inventory.enums.FashionTypes;
import com.ekart.inventory.enums.Size;
import com.ekart.inventory.enums.Suitable;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Toys {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int toyId;
    private String productName;
    private String logoImg;

    private int productPrice;
    private String productDescription;
    private String brandName;

    private String type;
    private String suitablefor;

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
