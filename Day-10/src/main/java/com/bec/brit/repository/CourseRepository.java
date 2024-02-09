package com.bec.brit.repository;


import org.springframework.data.jpa.repository.JpaRepository;

import com.bec.brit.model.Course;

public interface CourseRepository extends JpaRepository<Course, String> {

    
}
