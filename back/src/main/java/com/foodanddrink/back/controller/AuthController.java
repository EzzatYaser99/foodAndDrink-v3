package com.foodanddrink.back.controller;


import com.foodanddrink.back.entity.ApiResponse;
import com.foodanddrink.back.entity.User;
import com.foodanddrink.back.repo.UserRepository;
import com.foodanddrink.back.security.JwtService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/auth")
@Tag(name = "Authentication", description = "Operations related to Login and Registration")
public class AuthController {

    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;
    private final PasswordEncoder passwordEncoder;
    private final UserRepository userRepository;

    public AuthController(JwtService jwtService, AuthenticationManager authenticationManager, PasswordEncoder passwordEncoder, UserRepository userRepository) {
        this.jwtService = jwtService;
        this.authenticationManager = authenticationManager;
        this.passwordEncoder = passwordEncoder;
        this.userRepository = userRepository;
    }

    @PostMapping("/register")
    @Operation(summary = "Register a new user", description = "Creates a new user account with a username, password, and role.")
    public ResponseEntity<ApiResponse<User>> register(@RequestBody User user) {
        try {
            if (this.userRepository.findByUsername(user.getUsername()).isPresent()) {
                return ResponseEntity.status(HttpStatus.CONFLICT).body(new ApiResponse<>("username already exists", null, 409));
            }
            user.setPassword(passwordEncoder.encode(user.getPassword()));
            User savedUser = userRepository.save(user);
            return ResponseEntity.status(HttpStatus.CREATED).body(new ApiResponse<>("User registered successfully", savedUser, 201));
        } catch (Exception e) {
            return ResponseEntity.internalServerError()
                    .body(new ApiResponse<>("Error registering user: " + e.getMessage(), null, 500));
        }
    }


    @PostMapping("/login")
    @Operation(
            summary = "Authenticate user and issue access token",
            description = "Accepts username and password credentials, verifies them using the authentication manager, and returns a signed JWT token that must be included in the Authorization header for subsequent secured API requests."
    )
    public ResponseEntity<ApiResponse<Map<String, String>>> login(@RequestBody User user) {
        try {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(user.getUsername(), user.getPassword())
            );

            String token = jwtService.generateToken(user.getUsername(), Map.of());
            Map<String, String> responseData = Map.of("token", token);

            return ResponseEntity.ok(
                    new ApiResponse<>("Login successful", responseData, 200)
            );

        } catch (BadCredentialsException e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                    .body(new ApiResponse<>("Invalid username or password", null, 401));

        } catch (Exception e) {
            return ResponseEntity.internalServerError()
                    .body(new ApiResponse<>("Error during login: " + e.getMessage(), null, 500));
        }
    }
}
