# ./backend/payment_server/Dockerfile
# Step 1: Build the Kotlin Spring Boot application
FROM gradle:8.10.2-jdk17 AS builder
WORKDIR /app
COPY . .
RUN gradle build --no-daemon

# Step 2: Create the final image
FROM openjdk:17-jdk-alpine
WORKDIR /app
COPY --from=builder /app/build/libs/*.jar payment-server.jar
EXPOSE 8082
ENTRYPOINT ["java", "-jar", "payment-server.jar"]
