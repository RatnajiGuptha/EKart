package com.ekart.order.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ekart.order.entity.PurchaseOrder;

public interface OrderRepository extends JpaRepository<PurchaseOrder, Integer>{

}
