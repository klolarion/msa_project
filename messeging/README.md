# 이벤트/메시지 처리 서버 (Kafka) API 명세서

## 1. 개요
Kafka는 서비스 간 비동기 메시지 전송을 관리하며, 이벤트 발행과 구독을 통해 데이터 흐름을 제어합니다.

## 2. 이벤트 타입

### 1) 결제 생성 이벤트
- **토픽**: `payment.created`
- **메시지 구조**:
    ```json
    {
        "transaction_id": "abc123",
        "amount": 100.00,
        "currency": "USD",
        "status": "completed",
        "timestamp": "2024-09-26T12:00:00Z"
    }
    ```

## 2. 오류 처리
- **오류 대응**: 이벤트 소비 실패 시 자동 재시도 설정 및 로깅.