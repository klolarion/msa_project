# 운영 및 유지보수 가이드

## 1. 서비스 배포 절차 및 도구 사용법
- **도구**: Jenkins, Docker, Kubernetes
- **배포 절차**:
    1. 코드 푸시 → Jenkins 파이프라인 트리거
    2. 빌드 및 테스트 수행
    3. Docker 이미지 생성 및 레지스트리에 푸시
    4. Kubernetes를 통해 배포 및 업데이트

## 2. 장애 발생 시 대응 방법
- **서비스 재시작**: `kubectl rollout restart deployment <service-name>`
- **롤백**: `kubectl rollout undo deployment <service-name>`
- **장애 유형별 대응 시나리오**:
    - 서비스 다운 시 로그 분석 후 재시작
    - 데이터베이스 장애 시 연결 재시도 및 복구

## 3. 서버 모니터링 방법 및 대시보드 사용법
- **도구**: Grafana, Prometheus
- **대시보드 사용법**:
    - CPU, 메모리, 응답 시간 모니터링
    - 경고 설정 및 알림 대응 방법

## 4. 성능 튜닝 및 서비스 스케일링 방법
- **Kubernetes HPA 설정**:
    - `kubectl autoscale deployment <deployment-name> --cpu-percent=50 --min=1 --max=10`
- **성능 테스트 및 최적화**: JMeter 사용법

## 5. 백업 및 복구 절차
- **데이터베이스 백업**: MySQL, Redis 백업 설정 및 복구 방법
- **설정 파일 백업**: Kubernetes 시크릿과 설정 백업 명령어

## 6. 참고 자료 및 추가 정보
- Jenkins 파이프라인 설정 예시
- Kubernetes 명령어 참고 링크
- 서비스 장애 대응 시나리오 문서