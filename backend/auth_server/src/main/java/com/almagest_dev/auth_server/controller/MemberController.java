package com.almagest_dev.auth_server.controller;

import com.almagest_dev.auth_server.entity.Member;
import com.almagest_dev.auth_server.service.MemberService;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/members")
public class MemberController {

    private final MemberService memberService;

    public MemberController(MemberService memberService) {
        this.memberService = memberService;
    }

    @PostMapping
    public Member createMember(@RequestBody Member member) {
        // 실제 환경에서는 비밀번호를 해시 처리 (bcrypt 등)
        return memberService.createMember(member.getEmail(), member.getPasswordHash());
    }

    @GetMapping("/{email}")
    public Optional<Member> getMemberByEmail(@PathVariable String email) {
        return memberService.findByEmail(email);
    }
}
