package com.ekart.order.Repository;

import java.util.List;
import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ekart.order.entity.PurchaseOrder;

public interface OrderRepository extends JpaRepository<PurchaseOrder, UUID> {


	List<PurchaseOrder> findByEmail(String email);

}
