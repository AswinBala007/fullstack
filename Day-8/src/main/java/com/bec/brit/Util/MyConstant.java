package com.bec.brit.Util;

import static org.springframework.http.HttpHeaders.*;
import static org.springframework.http.HttpMethod.*;

import java.util.Arrays;
import java.util.List;

public class MyConstant {
    public static final String USER = "/api/v1/user";
    public static final String AUTH = "/api/v1/auth";
    public static final String REGISTER = "/register";
    public static final String LOGIN = "/login";
    public static final String PAYMENTLIST = "/paymentlist";
    public static final String PAYMENT = "/payment";
    public static final String COURSE = "/course";
    public static final String COURSELIST = "/courselist";
    public static final String ENQUIRY="/enquiry";
    public static final String ENQUIRYLIST="/enquirylist";
    public static final String USERLIST = "/list";
    public static final List<String> ORIGINS = Arrays.asList("http://localhost:4000");
    public static final List<String> HEADERS = Arrays.asList(AUTHORIZATION, CONTENT_TYPE);
    public static final List<String> METHODS = Arrays.asList(GET.name(), POST.name(), PUT.name(), DELETE.name(),
            HEAD.name(), PATCH.name());

    public static final String SWAGGER_LOCALHOST_URL = "http://localhost:8181";
    public static final String SWAGGER_SECURITY_SCHEME_NAME = "bearerAuth";
    public static final String SWAGGER_SCHEME = "bearer";
    public static final String SWAGGER_BEARER_FORMAT = "JWT";
    public static final String SWAGGER_DESCRIPTION = "Produce a JWT token.";
}