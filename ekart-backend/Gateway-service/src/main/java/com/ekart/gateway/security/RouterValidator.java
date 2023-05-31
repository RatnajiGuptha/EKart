package com.ekart.gateway.security;

import java.util.List;
import java.util.function.Predicate;

import org.springframework.http.server.reactive.ServerHttpRequest;
import org.springframework.stereotype.Component;

@Component
public class RouterValidator {

	public static final List<String> openApiEndPoints = List.of("/login", "/addUser");

	public Predicate<ServerHttpRequest> isSecured = req -> openApiEndPoints.stream()
			.noneMatch(uri -> req.getURI().getPath().contains(uri));
}
