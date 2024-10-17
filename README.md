
## MSA 시스템 개요

### 1. 인증 서버 (Java Spring Boot)
- **책임**: 사용자 인증 및 권한 관리.
- **기능**: 로그인, 회원가입, 토큰 발급 및 검증, 특수사용자 검증.
- **문서 링크**: [인증 서버 API 명세서](backend%2Fauth_server%2FAPI.md)

### 2. 비지니스 서버 (Nest.js)
- **책임**: 오픈뱅킹, 마이데이터, 기타 비지니스 기능.
- **기능**: 계좌 및 거래정보 관리, 가상 송금 및 이체, 사용자 데이터 수집 및 분석, 금융상품 추천.
- **문서 링크**: [비지니스 API 명세서](backend%2Fbusiness_server%2FAPI.md)

### 3. 결제 서버 (FastAPI)
- **책임**: 결제 및 송금 트랜잭션 관리, 상태 모니터링.
- **기능**: 결제, 송금 요청 처리, 결제 내역 조회, 이벤트 발행.
- **문서 링크**: [결제 서버 API 명세서](backend%2Fpayment_server%2FAPI.md)

### 4. AI 서버 (FastAPI)
- **책임**: AI 기반 분석 및 추천 제공.
- **기능**: 상품별 펀딩 성공률 예측, 상품 추천
- **문서 링크**: [AI 서버 API 명세서](backend%2Fai_server%2FAPI.md)

### 5. 이벤트/메시지 처리 서버 (Kafka)
- **책임**: 서비스 간 비동기 메시지 전송 및 이벤트 처리.
- **기능**: 이벤트 발행(결제, 펀딩 생성 등), 이벤트 소비, 메시지 큐 관리.
- **문서 링크**: [Kafka 메시지 처리 명세서](messeging%2FREADME.md)

### 6. 분산락/캐싱 서버 (Redis)
- **책임**: 데이터 캐싱, 세션 관리, 분산 락 제공.
- **기능**: 데이터 캐싱, 세션 관리, 분산 락 제공.
- **문서 링크**: [Redis 분산락/캐싱 명세서](redis_server%2FREADME.md)

### 7. 모니터링 서버 (Grafana, Prometheus)
- **책임**: 서비스 상태 및 성능 모니터링.
- **기능**: 실시간 모니터링, 알림 설정, 대시보드 제공.
- **문서 링크**: [모니터링 설정 명세서](monitoring%2FREADME.md)

### 8. CI/CD 서버 (Jenkins, Kubernetes)
- **책임**: 코드 빌드, 테스트, 배포 자동화.
- **기능**: 빌드 자동화, 테스트 자동화, 배포 자동화.
- **문서 링크**: [CI/CD 파이프라인 명세서](devops%2FREADME.md)

### 9. API Gateway 서버 (Nginx)
- **책임**: 요청 라우팅, 보안 강화.
- **기능**: 요청을 각 마이크로서비스로 전달, 속도 제한 및 로깅, SSL 설정을 통한 통신 보안.
- **문서 링크**: [API Gateway 설정 명세서](api_gateway%2FREADME.md)

### 10. 키 관리 서버 (Kubernetes Secrets, HashiCorp Vault)
- **책임**: 민감 정보 관리 및 접근 제어.
- **기능**: API 키, DB 비밀번호 등 중요한 정보의 안전한 저장 및 관리, 시크릿의 접근 제어 및 자동 갱신.
- **문서 링크**: [키 관리 설정 명세서](secrets%2FREADME.md)

### * Documentation
- [운영 및 유지보수 가이드](./docs/operations-guide.md)
- [아키텍처 구조](./docs/msa_project.png)