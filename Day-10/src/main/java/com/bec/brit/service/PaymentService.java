package com.bec.brit.service;


import com.bec.brit.dto.request.PaymentRequest;
import com.bec.brit.dto.response.BasicResponse;
import com.bec.brit.dto.response.PaymentResponse;

public interface PaymentService {
    BasicResponse<PaymentResponse> getAllUser();

    PaymentResponse register(PaymentRequest request);

    BasicResponse<PaymentResponse> deletebooking(String paymentId);
}