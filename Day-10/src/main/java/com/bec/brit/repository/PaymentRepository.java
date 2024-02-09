package com.bec.brit.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bec.brit.model.Payment;

public interface PaymentRepository extends JpaRepository<Payment, String> {

}
