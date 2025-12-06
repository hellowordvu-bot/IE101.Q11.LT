# ========================
# Stage 1: Build stage
# ========================
FROM node:20-alpine AS builder

# Tạo thư mục làm việc
WORKDIR /app

# Copy package.json và package-lock.json
COPY package*.json ./

# Cài tất cả dependencies
RUN npm install

# Copy toàn bộ source code
COPY . .

# Build Next.js app
RUN npm run build

# ========================
# Stage 2: Production stage
# ========================
FROM node:20-alpine AS runner

# Tạo thư mục làm việc
WORKDIR /app

# Copy package.json và cài production dependencies
COPY package*.json ./
RUN npm install --production

# Copy kết quả build từ stage trước
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.js ./next.config.js

# Expose cổng mặc định Next.js
EXPOSE 3000

# Command chạy ứng dụng
CMD ["npm", "start"]
