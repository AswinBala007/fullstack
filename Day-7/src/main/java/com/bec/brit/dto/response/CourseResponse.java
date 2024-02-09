package com.bec.brit.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CourseResponse {
    private String courseName;

    private String courseId;
    private String description;

    private String duration;

    private double cost;

    private String message;
}