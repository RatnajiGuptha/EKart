package com.ekart.jwt.security;

import java.security.Key;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.JwtBuilder;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;

@Component
public class JwtService {

	private static final long JWT_TOKEN_VALIDATIY = 10 * 60 * 60;

	private static final String jwtSecret = "5367566B59703373367639792F423F4528482B4D6251655468576D5A71347437";

	private Key getSignKey() {
		byte[] keyBytes = Decoders.BASE64.decode(jwtSecret);
		return Keys.hmacShaKeyFor(keyBytes);
	}

	public String generateToken(String username) {
		Map<String, Object> claims = new HashMap<>();
		JwtBuilder builder = Jwts.builder().setClaims(claims).setSubject(username)
				.setIssuedAt(new Date(System.currentTimeMillis()))
				.setExpiration(new Date(System.currentTimeMillis() + JWT_TOKEN_VALIDATIY * 1000))
				.signWith(getSignKey(), SignatureAlgorithm.HS256);
		return builder.compact();
	}

	public Boolean validateToken(String token, UserDetails userDetails) {

		String username = getUsernameFromToken(token);
		Claims claims = Jwts.parserBuilder().setSigningKey(getSignKey()).build().parseClaimsJws(token).getBody();
		Boolean isTokenExpired = claims.getExpiration().before(new Date());

		return (username.equals(userDetails.getUsername()) && !isTokenExpired);

	}

	public String getUsernameFromToken(String token) {
		final Claims claims = Jwts.parserBuilder().setSigningKey(getSignKey()).build().parseClaimsJws(token).getBody();
		return claims.getSubject();
	}

}
