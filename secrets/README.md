# 키 관리 사용 가이드

## 1. 사용 목적
- **민감 정보 보호**: API 키, DB 비밀번호 등 민감한 정보를 안전하게 저장하여 보안을 강화.
- **시크릿 접근 제어**: 각 서비스에서 필요한 시크릿에만 접근할 수 있도록 관리.
- **자동 갱신**: 시크릿을 주기적으로 갱신하여 보안 유지.

## 2. 주요 구성 요소 및 설정
- **Kubernetes Secrets**: Kubernetes 클러스터 내에서 민감 정보를 관리.
    - **시크릿 생성**: CLI를 통해 시크릿 생성 및 환경 변수로 주입.
    - **접근 권한 설정**: 특정 서비스에만 시크릿 노출.

- **HashiCorp Vault (선택)**: 고급 시크릿 관리와 접근 제어.

## 3. 설정 예시 및 구성 파일
- **Kubernetes Secrets 생성 예시**:
    ```bash
    kubectl create secret generic db-secret --from-literal=username=admin --from-literal=password=securepassword
    ```

- **서비스에서 시크릿 사용 예시 (deployment.yaml)**:
    ```yaml
    env:
      - name: DB_USERNAME
        valueFrom:
          secretKeyRef:
            name: db-secret
            key: username
      - name: DB_PASSWORD
        valueFrom:
          secretKeyRef:
            name: db-secret
            key: password
    ```

## 4. 추가 고려사항
- **시크릿 갱신 주기 설정**: 보안을 강화하기 위해 주기적으로 갱신.
- **시크릿 관리 정책**: 접근 권한 명확히 정의하여 불필요한 시크릿 노출 방지.
