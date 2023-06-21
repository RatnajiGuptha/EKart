package com.ekart.order.Repository;

import com.ekart.common.DTO.ProductCategories;
import com.ekart.order.entity.Cart;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;


public interface CartRepository extends JpaRepository<Cart, Integer> {


	Cart findByProductId(int productId);

	Cart findByProductIdAndProductCategories(int productId, ProductCategories category);

	Cart findByProductCategoriesAndProductId(ProductCategories category, int productId);
	

	List<Cart> findByEmail(String email);

	Cart findByCartIdAndEmail(int id, String email);
}
