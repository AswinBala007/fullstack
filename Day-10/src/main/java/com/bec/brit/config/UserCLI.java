package com.bec.brit.config;

import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import com.bec.brit.enumurate.Role;
import com.bec.brit.model.Users;
import com.bec.brit.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@Component
@RequiredArgsConstructor
public class UserCLI implements CommandLineRunner{
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    @Override
    public void run(String... args) throws Exception {
        if (userRepository.count()>0){
            return;
        }
        var user= Users.builder()
        .name("Admin")
        .email("admin@123")
        .password(passwordEncoder.encode("abc"))
        .role(Role.ADMIN)
        .build();

        userRepository.save(user);
    }

}
