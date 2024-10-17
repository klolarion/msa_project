package com.almagest_dev.auth_server.service;


import com.almagest_dev.auth_server.entity.Member;
import com.almagest_dev.auth_server.repository.MemberRepository;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import java.util.Optional;

@Service
public class MemberService {

    private final MemberRepository memberRepository;
    private final PasswordEncoder bCryptPasswordEncoder;

    public MemberService(MemberRepository memberRepository, PasswordEncoder bCryptPasswordEncoder) {
        this.memberRepository = memberRepository;
        this.bCryptPasswordEncoder = bCryptPasswordEncoder;
    }

    public Member createMember(String email, String passwordHash) {
        Member member = new Member();
        member.setEmail(email);
        member.setPasswordHash(bCryptPasswordEncoder.encode(passwordHash));
        System.out.println(member.toString());
        return memberRepository.save(member);
    }

    public Optional<Member> findByEmail(String email) {
        return memberRepository.findByEmail(email);
    }
}
