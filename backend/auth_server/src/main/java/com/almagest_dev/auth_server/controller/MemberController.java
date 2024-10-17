package com.almagest_dev.auth_server.controller;

import com.almagest_dev.auth_server.entity.Member;
import com.almagest_dev.auth_server.service.MemberService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/members")
public class MemberController {

    private final MemberService memberService;

    public MemberController(MemberService memberService) {
        this.memberService = memberService;
    }



    @GetMapping("/{email}")
    public Member getMemberByEmail(@PathVariable String email) {
        return memberService.findByEmail(email).orElseThrow(() -> new UsernameNotFoundException("Member not found"));
    }
}
