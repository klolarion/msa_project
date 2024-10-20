# ./backend/authentication_server/Dockerfile
# Step 1: Build the Spring Boot application
FROM gradle:8.10.2-jdk17 AS builder
WORKDIR /app
COPY . .
RUN gradle build --no-daemon

# Step 2: Create the final image with the JAR file
FROM openjdk:17-jdk-alpine
WORKDIR /app
COPY --from=builder /app/build/libs/*.jar auth-server.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "auth-server.jar"]
