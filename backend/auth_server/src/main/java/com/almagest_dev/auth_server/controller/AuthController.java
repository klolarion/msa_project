package com.almagest_dev.auth_server.controller;

import com.almagest_dev.auth_server.entity.Member;
import com.almagest_dev.auth_server.service.MemberService;
import com.almagest_dev.auth_server.util.JwtUtil;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/auth")
public class AuthController {

    private final MemberService memberService;
    private final JwtUtil jwtUtil;
    private final PasswordEncoder passwordEncoder;

    public AuthController(MemberService memberService, JwtUtil jwtUtil, PasswordEncoder passwordEncoder) {
        this.memberService = memberService;
        this.jwtUtil = jwtUtil;
        this.passwordEncoder = passwordEncoder;
    }

    @PostMapping("/member")
    public Member createMember(@RequestBody Member member) {
        // 실제 환경에서는 비밀번호를 해시 처리 (bcrypt 등)
        return memberService.createMember(member.getEmail(), member.getPasswordHash());
    }

    @PostMapping("/login")
    public Map<String, String> login(@RequestBody Map<String, String> request) {
        String email = request.get("email");
        String password = request.get("password");

        Optional<Member> memberOpt = memberService.findByEmail(email);
        if (memberOpt.isPresent() && passwordEncoder.matches(password, memberOpt.get().getPasswordHash())) {
            String token = jwtUtil.generateToken(email);
            Map<String, String> response = new HashMap<>();
            response.put("token", token);
            return response;
        } else {
            throw new RuntimeException("Invalid credentials");
        }
    }

    @PostMapping("/refresh")
    public Map<String, String> refreshToken(@RequestBody Map<String, String> request) {
        String token = request.get("token");
        if (jwtUtil.validateToken(token)) {
            String email = jwtUtil.getEmailFromToken(token);
            String newToken = jwtUtil.generateToken(email);
            Map<String, String> response = new HashMap<>();
            response.put("token", newToken);
            return response;
        } else {
            throw new RuntimeException("Invalid token");
        }
    }
}
