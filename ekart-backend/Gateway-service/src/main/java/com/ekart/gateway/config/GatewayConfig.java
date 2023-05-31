package com.ekart.gateway.config;

import org.springframework.cloud.gateway.route.RouteLocator;
import org.springframework.cloud.gateway.route.builder.RouteLocatorBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class GatewayConfig {

	@Bean
	public RouteLocator locator(RouteLocatorBuilder builder) {
		return builder.routes()
				.route((p -> p.path("/api/accessoriesProducts/getAllAccessoriesProduct").uri("http://localhost:8200")))
				.route((p -> p.path("/api/accessoriesProducts/getAccessoriesProductById/**")
						.uri("http://localhost:8200")))
				.route((p -> p.path("/api/accessoriesProducts/getAccessories/type/**").uri("http://localhost:8200")))
				.route((p -> p.path("/api/accessoriesProducts/getAccessories/suitableFor/**")
						.uri("http://localhost:8200")))
				.route((p -> p.path("/api/accessoriesProducts/addMultipleProducts").uri("http://localhost:8200")))
				.route((p -> p.path("/api/accessoriesProducts/add").uri("http://localhost:8200")))
				.route((p -> p.path("/api/accessoriesProducts/setQuantity/**").uri("http://localhost:8200")))
				.route((p -> p.path("/api/accessoriesProducts/getAccessories/sellerName/**").uri("http://localhost:8200")))
				.route((p -> p.path("/api/accessoriesProducts/updateProducts/**").uri("http://localhost:8200")))

				.route((p -> p.path("/api/beauty/getBeautyProducts").uri("http://localhost:8200")))
				.route((p -> p.path("/api/beauty/getBeautyById/**").uri("http://localhost:8200")))
				.route((p -> p.path("/api/beauty/setQuantity/**").uri("http://localhost:8200")))
				.route((p -> p.path("/api/beauty/add").uri("http://localhost:8200")))
				.route((p -> p.path("/api/beauty/addMultipleBeautyProducts").uri("http://localhost:8200")))
				.route((p -> p.path("/api/beauty/getBeautyBySellerName/**").uri("http://localhost:8200")))
				.route((p -> p.path("/api/beauty/updateProducts/**").uri("http://localhost:8200")))
				
				.route((p -> p.path("/api/electronicsProducts/getElectronics").uri("http://localhost:8200")))
				.route((p -> p.path("/api/electronicsProducts/getElectronics/**").uri("http://localhost:8200")))
				.route((p -> p.path("/api/electronicsProducts/getElectronicsById/**").uri("http://localhost:8200")))
				.route((p -> p.path("/api/electronicsProducts/add").uri("http://localhost:8200")))
				.route((p -> p.path("/api/electronicsProducts/addMultipleElectronics").uri("http://localhost:8200")))
				.route((p -> p.path(" /api/electronicsProducts/setQuantity/**").uri("http://localhost:8200")))
				.route((p -> p.path("/api/electronicsProducts/getElectronics/sellerName/**").uri("http://localhost:8200")))
				.route((p -> p.path("/api/electronicsProducts/updateProducts/**").uri("http://localhost:8200")))

				.route((p -> p.path("/api/fashionProducts/getProducts").uri("http://localhost:8200")))
				.route((p -> p.path("/api/fashionProducts/getProducts/**").uri("http://localhost:8200")))
				.route((p -> p.path("/api/fashionProducts/getProducts/suitableFor/**").uri("http://localhost:8200")))
				.route((p -> p.path("/api/fashionProducts/getProductsBy/suitablefor/**").uri("http://localhost:8200")))
				.route((p -> p.path("/api/fashionProducts/getProducts/sellerName/**").uri("http://localhost:8200")))
				.route((p -> p.path("/api/fashionProducts/add").uri("http://localhost:8200")))
				.route((p -> p.path("/api/fashionProducts/addMultipleProducts").uri("http://localhost:8200")))
				.route((p -> p.path("/api/fashionProducts/setQuantity/**").uri("http://localhost:8200")))
				.route((p -> p.path("/api/fashionProducts/getProducts/sellerName/**").uri("http://localhost:8200")))
				.route((p -> p.path("/api/fashionProducts/updateProducts/**").uri("http://localhost:8200")))

				.route((p -> p.path("/api/footWear/getFootWear").uri("http://localhost:8200")))
				.route((p -> p.path("/api/footWear/getFootWearById/**").uri("http://localhost:8200")))
				.route((p -> p.path("/api/footWear/getFootWear/**").uri("http://localhost:8200")))
				.route((p -> p.path("/api/footWear/getFootWear/suitableFor/**").uri("http://localhost:8200")))
				.route((p -> p.path("/api/footWear/add").uri("http://localhost:8200")))
				.route((p -> p.path("/api/footWear/addMultipleFootWear").uri("http://localhost:8200")))
				.route((p -> p.path("/api/footWear/setQuantity/**").uri("http://localhost:8200")))
				.route((p -> p.path("/api/footWear/getFootWearBySellerName/**").uri("http://localhost:8200")))
				.route((p -> p.path("/api/footWear/updateProducts/**").uri("http://localhost:8200")))

				.route((p -> p.path("/api/Toys/getToys").uri("http://localhost:8200")))
				.route((p -> p.path("/api/Toys/getToys/**").uri("http://localhost:8200")))
				.route((p -> p.path("/api/Toys/setQuantity/**").uri("http://localhost:8200")))
				.route((p -> p.path("/api/Toys/add").uri("http://localhost:8200")))
				.route((p -> p.path("/api/Toys/addMultipleToys").uri("http://localhost:8200")))
				.route((p -> p.path("/api/Toys/setQuantity/**").uri("http://localhost:8200")))
				.route((p -> p.path("/api/Toys/getToys/sellerName/**").uri("http://localhost:8200")))
				.route((p -> p.path("/api/Toys/updateProducts/**").uri("http://localhost:8200")))

				.route((p -> p.path("/api/cart/getProducts").uri("http://localhost:8300")))
				.route((p -> p.path("/api/cart/getByUserName/**").uri("http://localhost:8300")))
				.route((p -> p.path("/api/cart/getByProductId/**").uri("http://localhost:8300")))
				.route((p -> p.path("/api/cart/getProductCategoryAndProductId/**").uri("http://localhost:8300")))
				.route((p -> p.path("/api/cart/add").uri("http://localhost:8300")))
				.route((p -> p.path("/api/cart/addMutlipleProducts").uri("http://localhost:8300")))
				.route((p -> p.path("/api/cart/**").uri("http://localhost:8300")))
				.route((p -> p.path("/api/cart/deleteProductInCartByProductId/**").uri("http://localhost:8300")))
				.route((p -> p.path("/api/cart/DeleteAllItemsInCart").uri("http://localhost:8300")))
				.route((p -> p.path("/api/cart/deleteProductInCart/**").uri("http://localhost:8300")))

				.route((p -> p.path("/api/getOrders").uri("http://localhost:8300")))
				.route((p -> p.path("/api/getOrders/**").uri("http://localhost:8300")))
				.route((p -> p.path("/api/createOrder/**").uri("http://localhost:8300")))

				.route((p -> p.path("/api/userBalance/getUserBalance").uri("http://localhost:8083")))
				.route((p -> p.path("/api/userBalance/getDetails").uri("http://localhost:8083")))
				.route((p -> p.path("/api/add").uri("http://localhost:8083")))
				.route((p -> p.path("/api/userBalance/getBalanceByUserName/**").uri("http://localhost:8083")))

				.route((p -> p.path("/getUserName/**").uri("http://localhost:8400")))
				.route((p -> p.path("/getUserByContactNumber/**").uri("http://localhost:8400")))
				.route((p -> p.path("/getUserByMail/**").uri("http://localhost:8400")))
				.route((p -> p.path("/addUser").uri("http://localhost:8400")))
				.route((p -> p.path("/addSeller").uri("http://localhost:8400")))
				.route((p -> p.path("/login").uri("http://localhost:8400")))
				.route((p -> p.path("/getUserInfo/**").uri("http://localhost:8400")))
				.route((p->p.path("/updateUserData/**").uri("http://localhost:8400")))
				.build();
	}

}
