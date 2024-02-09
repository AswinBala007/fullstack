package com.bec.brit.service;

import com.bec.brit.dto.request.LoginRequest;
import com.bec.brit.dto.request.RegisterRequest;
import com.bec.brit.dto.response.LoginResponse;
import com.bec.brit.dto.response.RegisterResponse;

public interface AuthenticationService {
    RegisterResponse register(RegisterRequest request);

    LoginResponse login(LoginRequest request);
}
