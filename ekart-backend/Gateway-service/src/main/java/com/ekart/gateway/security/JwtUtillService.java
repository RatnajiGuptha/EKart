package com.ekart.gateway.security;

import java.security.Key;

import org.springframework.stereotype.Component;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;

@Component
public class JwtUtillService {

	private static final String jwtSecret = "5367566B59703373367639792F423F4528482B4D6251655468576D5A71347437";

	private Key getSignKey() {
		byte[] keyBytes = Decoders.BASE64.decode(jwtSecret);
		return Keys.hmacShaKeyFor(keyBytes);
	}

	public boolean validateJwtToken(final String token) {
		try {
			Jwts.parserBuilder().setSigningKey(getSignKey()).build().parseClaimsJws(token).getBody();
			return true;
		} catch (Exception e) {
			return false;
		}
	}
}
