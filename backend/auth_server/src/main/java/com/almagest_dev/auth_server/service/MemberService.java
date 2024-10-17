package com.almagest_dev.auth_server.service;


import com.almagest_dev.auth_server.entity.Member;
import com.almagest_dev.auth_server.repository.MemberRepository;
import org.springframework.stereotype.Service;
import java.util.Optional;

@Service
public class MemberService {

    private final MemberRepository memberRepository;

    public MemberService(MemberRepository memberRepository) {
        this.memberRepository = memberRepository;
    }

    public Member createMember(String email, String passwordHash) {
        Member member = new Member();
        member.setEmail(email);
        member.setPasswordHash(passwordHash);
        return memberRepository.save(member);
    }

    public Optional<Member> findByEmail(String email) {
        return memberRepository.findByEmail(email);
    }
}
