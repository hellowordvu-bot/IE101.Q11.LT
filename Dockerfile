# Stage 1: Build
FROM node:22-alpine AS builder

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy all files
COPY . .

# Build the Next.js app
RUN npm run build

# Stage 2: Production image
FROM node:22-alpine

WORKDIR /app

# Copy only production dependencies
COPY package*.json ./
RUN npm install --production

# Copy build output from builder
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.js ./next.config.js

# Expose Next.js default port
EXPOSE 3000

# Start the app in production mode
CMD ["npx", "next", "start"]
