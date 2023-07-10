package com.ekart.order.serviceImplementation;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.UUID;

import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;

import com.ekart.common.DTO.ProductCategories;
import com.ekart.common.events.OrderStatus;
import com.ekart.common.events.PaymentStatus;
import com.ekart.order.Repository.OrderRepository;
import com.ekart.order.config.OrderStatusPublisher;
import com.ekart.order.entity.PurchaseOrder;

@SpringBootTest
class OrderServiceImplTest {

	@Mock
	private OrderRepository orderRepo;

	@InjectMocks
	OrderServiceImpl orderImpl;
	
	@Mock
	private OrderStatusPublisher orderStatusPublisher;

	/*@Test
	public void createOrdersTest() {
		PurchaseOrder order = new PurchaseOrder(UUID.randomUUID(),"04/07/2023 10:51:47","shyamkumarhasti@gmail.com", Arrays.asList(7),
				Arrays.asList(1), Arrays.asList(ProductCategories.Accessories), 998, 1426.0, Arrays.asList(1426),
				Arrays.asList("Lino Perros Sling Bag"), Arrays.asList("Lino Perros"), Arrays.asList("FreeSize"), Arrays.asList("White"),Arrays.asList("Luffy Enterprises"),
				Arrays.asList(String.valueOf(2), "shyamkumarhasti@gmail.com", "Shyam Kumar", "9346338762",
						"PLOT NO: 97 A.B.C", "pragathinagar", "Pragatinagar", "K.V.Rangareddy", "Telangana",
						String.valueOf(500090)), "FLAT30",OrderStatus.ORDER_CREATED,null);
		
		OrderRequestDTO orderRequestDTO = new OrderRequestDTO();
		orderRequestDTO.setOrderId(UUID.fromString("22bade2b-56f1-4b8e-9e04-94901665d550"));
		orderRequestDTO.setEmail("shyamkumarhasti@gmail.com");
		orderRequestDTO.setProductIds(Arrays.asList(7));
		orderRequestDTO.setCategoryNames(Arrays.asList(ProductCategories.Accessories));
		orderRequestDTO.setQty(Arrays.asList(1));
		orderRequestDTO.setPriceList(Arrays.asList(1426));
		orderRequestDTO.setProductName(Arrays.asList("Lino Perros Sling Bag"));
		orderRequestDTO.setBrandName(Arrays.asList("Lino Perros"));
		orderRequestDTO.setSize(Arrays.asList("FreeSize"));
		orderRequestDTO.setColor(Arrays.asList("White"));
		orderRequestDTO.setSellerName(Arrays.asList("Luffy Enterprises"));
		orderRequestDTO.setPrice(998);
		orderRequestDTO.setPromoCode("FLAT30");
		orderRequestDTO.setTotalPrice(1426.0);
		orderRequestDTO.setAddress(Arrays.asList("2", "shyamkumarhasti@gmail.com", "Shyam Kumar", "9346338762",
				"PLOT NO: 97 A.B.C", "pragathinagar", "Pragatinagar", "K.V.Rangareddy", "Telangana", "500090"));
		
		System.out.println(order.getPurchaseOrderId());
		when(orderRepo.save(order)).thenReturn(order);
		System.out.println(orderRepo.save(order));
		System.out.println(orderImpl.createOrders(orderRequestDTO));
		assertEquals(order, orderImpl.createOrders(orderRequestDTO));
	}*/
	
	@Test
	public void getAllOrdersTest() {
		PurchaseOrder order = new PurchaseOrder(UUID.randomUUID(),"04/07/2023 10:51:47","shyamkumarhasti@gmail.com", Arrays.asList(7),
				Arrays.asList(1), Arrays.asList(ProductCategories.Accessories), 998, 1426.0, Arrays.asList(1426),
				Arrays.asList("Lino Perros Sling Bag"), Arrays.asList("Lino Perros"), Arrays.asList("FreeSize"), Arrays.asList("White"),Arrays.asList("Luffy Enterprises"),
				Arrays.asList(String.valueOf(2), "shyamkumarhasti@gmail.com", "Shyam Kumar", "9346338762",
						"PLOT NO: 97 A.B.C", "pragathinagar", "Pragatinagar", "K.V.Rangareddy", "Telangana",
						String.valueOf(500090)), "FLAT30",OrderStatus.ORDER_CREATED,PaymentStatus.PAYMENT_COMPLETED);
		List<PurchaseOrder> list = new ArrayList<PurchaseOrder>();
		list.add(order);
		
		when(orderRepo.findAll()).thenReturn(list);
		assertEquals(list, orderImpl.fetchOrders());
		
	}

}
