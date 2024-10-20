# ./backend/business_server/Dockerfile
# Step 1: Build the Nest.js app
FROM node:18-alpine AS builder
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

# Step 2: Run the built application
FROM node:18-alpine
WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY package.json package-lock.json ./
RUN npm install --production
EXPOSE 8081
CMD ["node", "dist/main"]
