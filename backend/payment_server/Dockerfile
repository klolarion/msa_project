# 1. OpenJDK 기반 Kotlin 환경 설정
FROM openjdk:17-jdk-alpine

# 2. 작업 디렉터리 생성
WORKDIR /app

# 3. Gradle 빌드 파일과 소스 코드 복사
COPY build/libs/payment_server.jar /app/payment_server.jar

# 4. 애플리케이션 실행
ENTRYPOINT ["java", "-jar", "/app/payment_server.jar"]

# 5. 결제 서버 포트 공개
EXPOSE 8082
