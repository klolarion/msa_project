# OpenJDK 이미지 사용
FROM openjdk:17-jdk-alpine

# 애플리케이션 jar 파일 복사
COPY target/auth_server.jar /app/auth_server.jar

# 애플리케이션 실행
ENTRYPOINT ["java", "-jar", "/app/auth_server.jar"]

# 포트 지정
EXPOSE 8080
