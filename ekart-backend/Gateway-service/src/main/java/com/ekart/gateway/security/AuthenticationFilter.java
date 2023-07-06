package com.ekart.gateway.security;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.gateway.filter.GatewayFilter;
import org.springframework.cloud.gateway.filter.factory.AbstractGatewayFilterFactory;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.server.ResponseStatusException;

import reactor.core.publisher.Mono;

@Component
public class AuthenticationFilter extends AbstractGatewayFilterFactory<AuthenticationFilter.Config> {

	private static final Logger logger = LoggerFactory.getLogger(AuthenticationFilter.class);

	@Autowired
	private RouterValidator validator;

	@Autowired
	private JwtUtillService jwtUtil;

	public AuthenticationFilter() {
		super(Config.class);
	}

	public static class Config {
	}

	@Override
	public GatewayFilter apply(Config config) {
		return ((exchange, chain) -> {

			if (validator.isSecured.test(exchange.getRequest())) {

				if (!exchange.getRequest().getHeaders().containsKey(HttpHeaders.AUTHORIZATION)) {
					logger.error("missing authorization header");
					throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, "missing authorization header");
				}

				System.out.println("---------------------------------");
				String authHeader = exchange.getRequest().getHeaders().get(HttpHeaders.AUTHORIZATION).get(0);
				logger.info(authHeader);
//				System.out.println(authHeader);
				System.out.println("---------------------------------");

				if (authHeader != null && authHeader.startsWith("Bearer ")) {
					authHeader = authHeader.substring(7);
				}

				if (jwtUtil.validateJwtToken(authHeader)) {
					logger.info("Token validate sucessfully");
					return chain.filter(exchange);

				} else {
					System.err.println("invalid token...!");
					logger.error("invalid token...!");
					throw new ResponseStatusException(HttpStatus.UNAUTHORIZED,
							"unauthorized access to application invalid token");
				}
			}
			return null;
		});
	}

	@ExceptionHandler(value = ResponseStatusException.class)
	public Mono<ResponseEntity<Object>> handleResponseStatusException(ResponseStatusException ex) {
		return Mono.just(ResponseEntity.status(ex.getStatusCode()).body(ex.getMessage()));
	}

}
