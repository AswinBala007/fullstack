package com.bec.brit.service.impl;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.bec.brit.dto.request.CourseRequest;
import com.bec.brit.dto.response.BasicResponse;
import com.bec.brit.dto.response.CourseResponse;
import com.bec.brit.model.Course;
import com.bec.brit.repository.CourseRepository;
import com.bec.brit.service.CourseService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class CourseServiceImpl implements CourseService {

    private final CourseRepository courseRepository;

    @Override
    public BasicResponse<CourseResponse> getAllCourse() {
        List<Course> courses = courseRepository.findAll();
        List<CourseResponse> courseResponses = courses.stream().map(course -> CourseResponse.builder()
                .courseId(course.getCourseId())
                .courseName(course.getCourseName())
                .description(course.getDescription())
                .cost(course.getCost())
                .duration(course.getDuration()).build())
                .collect(Collectors.toList());

        return BasicResponse.<CourseResponse>builder()
                .message("Course Data fetched").data(courseResponses).build();
    }

    @Override
    public BasicResponse<CourseResponse> updateCourse(String courseId, CourseRequest courseRequest) {
        BasicResponse<CourseResponse> response = new BasicResponse<>();
        try {
            Optional<Course> optionalCourse = courseRepository.findById(courseId);
            if (optionalCourse.isPresent()) {
                Course existingCourse = optionalCourse.get();
                existingCourse.setCourseName(courseRequest.getCourseName());
                existingCourse.setDescription(courseRequest.getDescription());
                existingCourse.setCost(courseRequest.getCost());
                existingCourse.setDuration(courseRequest.getDuration());
                courseRepository.save(existingCourse);
                response.setMessage("Course updated successfully");
            } else {
                response.setMessage("Course not found with ID: " + courseId);
            }
        } catch (Exception e) {
            response.setMessage("Failed to update course: " + e.getMessage());
        }
        return response;
    }

    @Override
    public CourseResponse register(CourseRequest request) {
        Course course = Course.builder().courseName(request.getCourseName()).description(request.getDescription())
                .duration(request.getDuration()).cost(request.getCost()).build();
        courseRepository.save(course);
        return CourseResponse.builder()
                .message("User Created Successfully")
                .build();
    }

    @Override
    public BasicResponse<CourseResponse> deletecourse(String courseId) {
        if (courseRepository.existsById(courseId)) {
            courseRepository.deleteById(courseId);
            return BasicResponse.<CourseResponse>builder()
                    .message("Course deleted successfully")
                    .build();
        } else {
            return BasicResponse.<CourseResponse>builder()
                    .message("Course not found with ID: " + courseId)
                    .build();
        }
    }

}