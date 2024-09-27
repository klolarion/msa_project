# 모니터링 사용 가이드

## 1. 사용 목적
- **서비스 상태 모니터링**: 각 서비스의 상태와 성능을 실시간으로 모니터링하여 시스템의 가용성을 유지합니다.
- **성능 분석 및 경고 설정**: 이상 감지 시 경고를 발송하여 신속하게 대응할 수 있도록 지원합니다.
- **문제 해결 지원**: 로그와 메트릭 데이터를 통해 문제 발생 시 원인 파악과 빠른 해결을 돕습니다.

## 2. 주요 구성 요소 및 설정
- **Prometheus**: 각 서비스에서 메트릭 데이터를 수집하고 저장.
  - **스크래핑 설정**: Prometheus가 메트릭 데이터를 수집할 엔드포인트를 설정.
  - **메트릭 수집 빈도**: 최신 데이터 유지를 위한 수집 빈도 설정.

- **Grafana**: Prometheus 데이터를 시각화하여 모니터링.
  - **대시보드 설정**: 주요 메트릭을 시각화하여 실시간 모니터링.
  - **경고 설정**: 임계치 초과 시 알림 발송 설정.

- **Elasticsearch**: 각 서비스에서 발생하는 로그 데이터를 수집하고 저장하여, 빠른 검색과 분석을 지원합니다.
  - **인덱싱 설정**: 로그 데이터를 효율적으로 검색할 수 있도록 인덱싱 설정.
  - **로그 수집기(Logstash/Fluentd)**: 로그 데이터를 수집하고 Elasticsearch로 전송합니다.

- **Kibana**: Elasticsearch와 연동하여 로그 데이터를 시각화하고 분석합니다.
  - **대시보드 설정**: 로그 데이터를 시각화하여 주요 에러 패턴과 서비스 상태를 분석.
  - **경고 설정**: 특정 에러 발생 시 경고를 설정하고 알림을 전송.

## 3. 설정 예시 및 구성 파일
- **Prometheus 설정 파일 (prometheus.yml)**:
    ```yaml
    global:
      scrape_interval: 15s

    scrape_configs:
      - job_name: 'service_monitoring'
        static_configs:
          - targets: ['localhost:9090', 'localhost:8080']
    ```

- **Grafana 대시보드 설정**:
  - CPU 사용량, 메모리 사용량, 요청 시간 등을 시각화하고 경고 설정.

- **Elasticsearch 설정 파일**:
  - Elasticsearch의 기본 설정과 인덱싱 설정을 포함하여 로그 데이터를 효율적으로 저장 및 검색합니다.

- **Kibana 대시보드 설정**:
  - 로그 데이터를 시계열 그래프, 테이블 등으로 시각화하고, 특정 패턴에 대한 분석을 수행합니다.

## 4. 추가 고려사항
- **알림 채널 구성**: Slack, 이메일 등 다양한 알림 채널 설정.
- **메트릭 데이터 보존 기간**: 스토리지 관리를 위한 데이터 보존 기간 설정.
- **로그 데이터 보존 기간**: Elasticsearch에서 로그 데이터의 보존 기간을 설정하여 스토리지 사용을 최적화합니다.

## 5. 참고 자료 및 추가 정보
- [Prometheus 설치 및 설정 가이드](../installation/prometheus-setup.md)
- [Grafana 설치 및 설정 가이드](../installation/grafana-setup.md)
- [Elasticsearch 설치 및 설정 가이드](../installation/elasticsearch-setup.md)
- [Kibana 설치 및 설정 가이드](../installation/kibana-setup.md)