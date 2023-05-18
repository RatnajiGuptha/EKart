package com.ekart.order.Repository;

import com.ekart.order.entity.Cart;
import com.ekart.order.enums.ProductCategories;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CartRepository extends JpaRepository<Cart, Integer> {

	Cart findByUserName(String userName);

	Cart findByProductId(int productId);

	Cart findByProductIdAndProductCategories(int productId, ProductCategories category);

	Cart findByProductCategoriesAndProductId(ProductCategories category, int productId);
}
