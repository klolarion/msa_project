### API Gateway 사용 가이드

### 1. 사용 목적
- 중앙화된 요청 관리: 클라이언트의 요청을 중앙에서 받아 각 마이크로서비스로 전달합니다.
- 보안 강화: SSL 설정과 보안 헤더 추가를 통해 안전한 통신을 보장하고, 인증과 권한 관리를 수행합니다.
- 부하 분산 및 속도 제한: 요청을 여러 서버에 분산하여 부하를 줄이고, 악의적인 트래픽을 차단하여 시스템의 안정성을 높입니다.
- 로깅 및 모니터링: 모든 요청과 응답을 로깅하여 시스템 모니터링과 문제 해결에 활용합니다.

### 2. 주요 기능 및 설정
- 요청 라우팅: 클라이언트의 요청을 각 마이크로서비스로 전달하는 역할을 수행합니다.
  - 경로 설정: URL 경로에 따라 특정 마이크로서비스로 라우팅.
  - 백엔드 서비스: upstream 블록을 통해 백엔드 서버 그룹을 정의하고 요청을 분배.
- 속도 제한 (Rate Limiting): Redis와 연동하여 IP 기반 요청 속도를 제한하여 악의적인 요청을 방지합니다.
  - IP 요청 카운트: 설정된 시간 동안 특정 IP의 요청 횟수를 제한하여 서비스 보호.
  - IP 블럭: 설정된 한도를 초과하면 일정 시간 동안 해당 IP를 차단.
- 보안 강화: SSL 설정을 통해 안전한 통신을 보장하고, 추가적인 보안 헤더를 적용하여 웹 애플리케이션 보안을 강화합니다.
  - SSL 설정: Let’s Encrypt를 통해 SSL 인증서를 발급받고 자동 갱신 설정.
  - 보안 헤더 추가: XSS 방지, MIME 스니핑 방지를 위한 헤더 설정.

### 3. 설정 예시 및 구성 파일
- 요청 라우팅 설정
```javascript
http {
    upstream auth_service {
      server auth1.example.com;
      server auth2.example.com;
    }
    server {
      listen 80;
      location /auth/ {
          proxy_pass http://auth_service;
          proxy_set_header Authorization $http_authorization;
      }
      location /payment/ {
          proxy_pass http://payment_service;
          proxy_set_header Authorization $http_authorization;
      }
    }
}
```
- 속도 제한 설정:<br>
```javascript
limit_req_zone $binary_remote_addr zone=mylimit:10m rate=5r/s;
server {
  location /api/ {
    limit_req zone=mylimit burst=10;
    proxy_pass http://backend_service;
  }
}
```

- SSL 설정:<br>
```javascript
server {
  listen 443 ssl;
  server_name example.com;

  ssl_certificate /etc/ssl/certs/example.crt;
  ssl_certificate_key /etc/ssl/private/example.key;

  location / {
    proxy_pass http://backend_service;    
  }
}
```

### 4. 에러 처리 및 로깅
- 에러 처리: 인증 실패, 경로 오류 발생 시 적절한 HTTP 상태 코드와 메시지를 반환.
- 로깅 설정: 모든 요청과 에러에 대한 로그를 기록하여 모니터링과 문제 해결에 활용.
- 에러 처리 예시:
```javascript
error_page 401 403 404 /custom_404.html;
location = /custom_404.html {
    internal;
}
```

### 5. 모니터링 및 경고 설정
- 모니터링 도구: Grafana와 Prometheus를 통해 API Gateway 성능 및 상태 모니터링.
- 경고 설정: 비정상적인 트래픽 증가 시 경고 알림 설정.
- 로깅 분석: 주요 이벤트 및 에러 로그 분석을 통한 실시간 시스템 상태 파악.

6. 추가 고려사항
- 로드 밸런싱 설정 준비: 다중 인스턴스 운영을 대비한 설정 준비.
- SSL 인증서 자동 갱신: Let’s Encrypt와 Certbot을 이용해 SSL 인증서를 자동으로 갱신.
- 보안 업데이트: API Gateway 및 관련 플러그인의 보안 업데이트 주기적 확인 및 적용.