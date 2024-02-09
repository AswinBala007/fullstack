package com.bec.brit.service;

import com.bec.brit.dto.request.CourseRequest;
import com.bec.brit.dto.response.BasicResponse;
import com.bec.brit.dto.response.CourseResponse;

public interface CourseService {

    BasicResponse<CourseResponse> getAllCourse();

    CourseResponse register(CourseRequest request);

    BasicResponse<CourseResponse> deletecourse(String courseId);

    BasicResponse<CourseResponse> updateCourse(String courseId, CourseRequest courseRequest);

}