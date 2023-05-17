package com.ekart.order.Repository;

import com.ekart.order.entity.Cart;
import org.springframework.data.jpa.repository.JpaRepository;


public interface CartRepository extends JpaRepository<Cart, Integer> {

    Cart findByUserName(String userName);

    Cart findByProductId(int productId);
}
