#!/bin/bash

# 1. Minikube와 Docker 연동
eval $(minikube docker-env)

# 2. Docker 이미지 빌드
docker build -t auth-server:latest -f ./backend/auth_server/Dockerfile ./backend/auth_server
docker build -t business-server:latest -f ./backend/business_server/Dockerfile ./backend/business_server
docker build -t payment-server:latest -f ./backend/payment_server/Dockerfile ./backend/payment_server
docker build -t ai-server:latest -f ./backend/ai_server/Dockerfile ./backend/ai_server
docker build -t frontend:latest -f ./frontend/Dockerfile ./frontend

# 3. 이미지 태깅과 DockerHub에 Push
docker tag auth-server:latest klolarion/auth-server:latest
docker tag business-server:latest klolarion/business-server:latest
docker tag payment-server:latest klolarion/payment-server:latest
docker tag ai-server:latest klolarion/ai-server:latest
docker tag frontend:latest klolarion/frontend:latest

docker push klolarion/auth-server:latest
docker push klolarion/business-server:latest
docker push klolarion/payment-server:latest
docker push klolarion/ai-server:latest
docker push klolarion/frontend:latest


# 4. Kubernetes에 배포
kubectl apply -f k8s/

# 5. 배포 상태 확인
kubectl get pods
kubectl get services
