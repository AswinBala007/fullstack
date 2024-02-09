package com.bec.brit.model;

import static jakarta.persistence.EnumType.STRING;
import static jakarta.persistence.GenerationType.UUID;

import java.util.Collection;
import java.util.List;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.bec.brit.enumurate.Role;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "users")
public class Users implements UserDetails {
    @Id
    @GeneratedValue(strategy = UUID)
    private String userId;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String email;

    @Column(nullable = false)
    private String password;

    @Enumerated(STRING)
    private Role role;

    private String image;

    private Long phoneNumber;

    private String address;

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return List.of(new SimpleGrantedAuthority(role.name()));
        // throw new UnsupportedOperationException("Unimplemented method
        // 'getAuthorities'");
    }

    @Override
    public String getUsername() {
        // throw new UnsupportedOperationException("Unimplemented method
        // 'getUsername'");
        return email;
    }

    @Override
    public String getPassword() {
        // throw new UnsupportedOperationException("Unimplemented method
        // 'getUsername'");
        return password;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
        // throw new UnsupportedOperationException("Unimplemented method
        // 'isAccountNonExpired'");
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
        // throw new UnsupportedOperationException("Unimplemented method
        // 'isCredentialsNonExpired'");
    }

    @Override
    public boolean isEnabled() {
        return true;
        // throw new UnsupportedOperationException("Unimplemented method 'isEnabled'");
    }

}
