package com.ekart.inventory.entity;

import com.ekart.inventory.enums.*;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class FootWear {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int footWearId;

    private String productName;
    private String logoImg;

    private int productPrice;
    private String productDescription;
    private String brandName;


    @Enumerated(EnumType.STRING)
    private FootWearType type;

    @Enumerated(EnumType.STRING)
    private FootWearSize size;

    @Enumerated(EnumType.STRING)
    private Suitable suitablefor;

    private String manufactureDate;

    private String productImg1;
    private String productImg2;
    private String productImg3;
    private String productImg4;
    private String productImg5;

    private String color;
    private String sellerName;

    private int qty;

}
