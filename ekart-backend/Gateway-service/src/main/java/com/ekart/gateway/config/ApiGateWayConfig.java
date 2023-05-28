package com.ekart.gateway.config;

import org.springframework.cloud.gateway.route.RouteLocator;
import org.springframework.cloud.gateway.route.builder.RouteLocatorBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class ApiGateWayConfig {
	
	@Bean
	public RouteLocator gateWayRouter(RouteLocatorBuilder locatorBuilder) {

		return locatorBuilder.routes()
				.route(p -> p.path("/api/accessoriesProducts/getAllAccessoriesProduct").uri("lb://inventory-service"))
				.route(p -> p.path("/api/accessoriesProducts/getAccessoriesProductById/**").uri("lb://inventory-service"))
				.route(p -> p.path("/api/accessoriesProducts/getAccessories/type/**").uri("lb://inventory-service"))
//				.route(p -> p.path(" /api/accessoriesProducts/getAccessories/type/**/**").uri("lb://inventory-service"))
				
				.build();
	}
}
