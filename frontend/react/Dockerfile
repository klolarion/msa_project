# 1. Node.js 이미지 사용
FROM node:18-alpine

# 2. 작업 디렉터리 설정
WORKDIR /app

# 3. 프로젝트 파일 복사
COPY . .

# 4. 의존성 설치 및 빌드
RUN npm install
RUN npm run build

# 5. Vite 서버 실행
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]

# 6. 포트 지정
EXPOSE 5173
