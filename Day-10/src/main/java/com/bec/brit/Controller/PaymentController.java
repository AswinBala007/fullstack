package com.bec.brit.Controller;

 import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bec.brit.Util.MyConstant;
import com.bec.brit.dto.request.PaymentRequest;
import com.bec.brit.dto.response.BasicResponse;
import com.bec.brit.dto.response.PaymentResponse;
import com.bec.brit.service.PaymentService;

import static com.bec.brit.Util.MyConstant.PAYMENT;
import static com.bec.brit.Util.MyConstant.PAYMENTLIST;
import static com.bec.brit.Util.MyConstant.USER;
import static org.springframework.http.HttpStatus.EXPECTATION_FAILED;
import static org.springframework.http.HttpStatus.OK;

import org.springframework.http.HttpStatus;

import lombok.RequiredArgsConstructor;


@RestController
@RequestMapping(USER)
@RequiredArgsConstructor
public class PaymentController {
private final PaymentService payService;

    @GetMapping(PAYMENTLIST)
    public ResponseEntity<BasicResponse<PaymentResponse>> getUser(){
        BasicResponse<PaymentResponse> response=new BasicResponse<>();
        try{
            response=payService.getAllUser();
            return new ResponseEntity<>(response, OK);
        }
        catch(Exception exception){
            response.setMessage("Something Went Wrong");
            return new ResponseEntity<>(response,EXPECTATION_FAILED);
        }
    }


    // @SuppressWarnings("null")
    @PostMapping(PAYMENT)
    public ResponseEntity<PaymentResponse> register(@RequestBody PaymentRequest request) {
        PaymentResponse response=new PaymentResponse();

        try{
            response=payService.register(request);
            return new ResponseEntity<>(response, HttpStatus.ACCEPTED);
        }
        catch(Exception e){
            response.setMessage("Something Went Wrong!!!!");
            return new ResponseEntity<>(response, EXPECTATION_FAILED);
        }
        
    }
    @DeleteMapping(MyConstant.PAYMENT + "/{paymentId}")
    public ResponseEntity<BasicResponse<PaymentResponse>> deleteBooking(@PathVariable String paymentId) {
        BasicResponse<PaymentResponse> response = new BasicResponse<>();
        try {
            BasicResponse<PaymentResponse> deletedBookingResponse = payService.deletebooking(paymentId);
            response.setMessage(deletedBookingResponse.getMessage());
            return new ResponseEntity<>(response, OK);
        } catch (Exception e) {
            response.setMessage("Failed to delete booking: " + e.getMessage());
            return new ResponseEntity<>(response, HttpStatus.INTERNAL_SERVER_ERROR);
  }
}

    
}