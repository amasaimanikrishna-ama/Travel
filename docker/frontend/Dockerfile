# ==========================================================
# Frontend Production Dockerfile (Multi-stage build)
# ==========================================================

# Stage 1: Build React/Vite Application
FROM node:20-alpine AS build

WORKDIR /app

# Copy dependency manifests
COPY frontend/package*.json ./

# Install dependencies
RUN npm ci

# Copy source code
COPY frontend/ .

# Build production bundle
RUN npm run build

# Stage 2: Serve with lightweight Nginx
FROM nginx:alpine

# Copy built assets from builder stage
COPY --from=build /app/dist /usr/share/nginx/html

# Expose HTTP port
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
