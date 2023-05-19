package com.ekart.order.Repository;

import com.ekart.common.DTO.ProductCategories;
import com.ekart.order.entity.Cart;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;


public interface CartRepository extends JpaRepository<Cart, Integer> {

	List<Cart> findByUserName(String userName);

	Cart findByProductId(int productId);

	Cart findByProductIdAndProductCategories(int productId, ProductCategories category);

	Cart findByProductCategoriesAndProductId(ProductCategories category, int productId);
}
