package com.ekart.order.entity;

import com.ekart.order.enums.FashionTypes;
import com.ekart.order.enums.ProductCatogories;
import com.ekart.order.enums.Size;
import com.ekart.order.enums.Suitable;
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
public class Cart {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int cartId;
    private  String userName;
    private int productId;
    private ProductCatogories productCatogories;
    private String productName;
    private String logoImg;

    private int productPrice;
    private String productDescription;
    private String brandName;

    @Enumerated(EnumType.STRING)
    private FashionTypes type;

    @Enumerated(EnumType.STRING)
    private Suitable suitablefor;

//    private String manufactureDate;
    private Size size;

    private String color;
    private String sellerName;

    private int qty;

}
