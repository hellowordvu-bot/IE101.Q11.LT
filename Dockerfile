# ========================
# Stage 1: Build
# ========================
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package.json & package-lock.json
COPY package*.json ./

# Cài tất cả dependencies
RUN npm install

# Copy toàn bộ source code
COPY . .

# Build Next.js app
RUN npm run build

# ========================
# Stage 2: Production
# ========================
FROM node:20-alpine AS runner

WORKDIR /app

# Copy package.json & cài production dependencies
COPY package*.json ./
RUN npm install --production

# Copy kết quả build từ stage trước
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.js ./next.config.js

# Expose port mặc định của Next.js
EXPOSE 3000

# Command chạy ứng dụng
CMD ["npm", "start"]
