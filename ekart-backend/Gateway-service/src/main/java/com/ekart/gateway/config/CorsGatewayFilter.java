package com.ekart.gateway.config;

import org.springframework.cloud.gateway.filter.GatewayFilter;
import org.springframework.cloud.gateway.filter.GatewayFilterChain;
import org.springframework.core.Ordered;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.server.reactive.ServerHttpResponse;
import org.springframework.stereotype.Component;
import org.springframework.web.server.ServerWebExchange;

import reactor.core.publisher.Mono;

@Component
public class CorsGatewayFilter implements GatewayFilter, Ordered {

	private static final String ALLOWED_ORIGIN = "*";

	@Override
	public Mono<Void> filter(ServerWebExchange exchange, GatewayFilterChain chain) {
		ServerHttpResponse response = exchange.getResponse();
		HttpHeaders headers = response.getHeaders();
		headers.add(HttpHeaders.ACCESS_CONTROL_ALLOW_ORIGIN, ALLOWED_ORIGIN);
		headers.add(HttpHeaders.ACCESS_CONTROL_ALLOW_METHODS, "GET, POST, PUT, DELETE, OPTIONS");
		headers.add(HttpHeaders.ACCESS_CONTROL_ALLOW_HEADERS, "*");
		headers.add(HttpHeaders.ACCESS_CONTROL_ALLOW_CREDENTIALS, "true");

		if (exchange.getRequest().getMethod() == HttpMethod.OPTIONS) {
			response.setStatusCode(HttpStatus.OK);
			return Mono.empty();
		}

		return chain.filter(exchange);
	}

	@Override
	public int getOrder() {
		return Ordered.HIGHEST_PRECEDENCE;
	}
}
