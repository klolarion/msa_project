# Node.js 이미지 사용
FROM node:18-alpine

# 작업 디렉터리 설정
WORKDIR /app

# 프로젝트 파일 복사
COPY . .

# 의존성 설치 및 빌드
RUN npm install
RUN npm run build

# 애플리케이션 실행
CMD ["npm", "run", "start:prod"]

# 포트 지정
EXPOSE 8081
