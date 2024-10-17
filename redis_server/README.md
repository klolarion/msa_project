## Redis 사용 가이드

### 1. 사용 목적
- API Gateway : IP기반 RL(Rate Limiting).
- 인증 서버 : 갱신토큰 검증용 랜덤 문자열.
- 결제 서버: 결제 상태 관리.
- 비지니스 서버: 빈번한 데이터 조회를 위한 캐싱.
- 분산락 관리

### 2. 키 네이밍 규칙 및 접두사 사용
- **API Gateway**: `rate_limit:<ip_address> = <request_count>`
    - 각 요청의 IP와 요청 카운트 누적, TTL은 10초로 설정.
- **API Gateway**: `block:<ip_address>`
    - IP 블럭, TTL은 5분으로 설정.
- **인증 서버**: `auth:<data>`
    - 갱신토큰의 검증 문자열, TTL은 토큰 만료기간과 같게 설정.
- **결제 서버**: `payment:txn:<txn_id>`
    - 결제 트랜잭션 정보를 관리하며, TTL은 10분으로 설정.
- **비지니스 서버**: `service:cache:<data_type>:<id>`
    - 자주 조회하는 데이터를 캐싱하며, TTL은 5분으로 설정.
- **분산락 관리**: `lock:<resource_name>`
    - 분산락 관리, TTL은 30초로 설정.

### 3. TTL(Time-to-Live) 설정
- IP 요청 카운트 : 10초
- IP 블럭 : 5분
- 트랜잭션 상태 키: 10분
- 캐시 데이터 키: 5분
- 분산락 : 30초

### 4. 에러 처리 및 데이터 정리
- 데이터 저장 실패 시 3회 재시도 후 로깅.
- Redis의 `EXPIRE` 명령을 사용하여 만료된 데이터 자동 삭제.
- 분산락 해제 실패 시 재시도 로직 구현.

### 5. 모니터링 및 경고 설정
- Grafana를 통해 Redis 성능 모니터링 및 경고 설정.
- 메모리 사용량 80% 이상 시 알림 발송.