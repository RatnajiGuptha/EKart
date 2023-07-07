
package com.ekart.order.service;

import java.util.Random;
import java.util.concurrent.TimeUnit;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailSenderService {
	@Autowired
	private JavaMailSender mailSender;

	public void sendSimpleEmail(String toEmail, String subject, String body) {
		SimpleMailMessage message = new SimpleMailMessage();
		message.setFrom("harshasribandi2001@gmail.com");
		message.setTo(toEmail);
		message.setText(body);
		message.setSubject(subject);
		mailSender.send(message);
		System.out.println("Mail Send...");

	}

	public String generateOtp() {
		Random random = new Random();
		int otp = 100000 + random.nextInt(900000);
		System.out.println(otp);
		return String.valueOf(otp);
	}

	public void sendOtp(String email, String otp, String subject, String text) {
		SimpleMailMessage message = new SimpleMailMessage();
		message.setTo(email);
		message.setSubject(subject);
		message.setText(text + otp);
		mailSender.send(message);
	}

	public boolean validateOtp(String sessionOtp, String enteredOtp) {
		return sessionOtp.equals(enteredOtp);
	}

	public void waitBeforeResendingOtp() {
		try {
			TimeUnit.SECONDS.sleep(60);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
	}

}