package com.bec.brit.service;

import com.bec.brit.dto.response.BasicResponse;
import com.bec.brit.dto.response.UserResponse;

public interface UserService {

    BasicResponse<UserResponse> getAllUser();

}
