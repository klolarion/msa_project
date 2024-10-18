인증 서버 API 명세서

localhost:8080

로그인
POST: /login

회원가입 
POST: /{memberId}

회원탈퇴 
DELETE: /{memberId}

로그아웃 
POST: /logout

비밀번호 재설정 
POST: /password-reset

토큰 갱신 
POST: /refresh-token

2단계 인증 
POST: /2fa/verify

사용자 정보 조회 및 수정 
GET: /{memberId}, PUT /{memberId}

로그인 이력 조회 
GET: /login-history/{memberId}

계정 잠금 및 해제 
POST: /lock/{memberId}

