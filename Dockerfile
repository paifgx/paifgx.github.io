# Stage 1: Build
FROM node:22-alpine AS builder

# Build argument für Site URL (optional, defaults to garten.ai)
ARG SITE_URL=https://garten.ai
ENV SITE_URL=${SITE_URL}

# Install pnpm (Version aus package.json)
RUN corepack enable && corepack prepare pnpm@10.23.0 --activate

WORKDIR /app

# Copy package files
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy source files
COPY . .

# Build the application
RUN pnpm run build

# Stage 2: Production
FROM nginx:alpine

# Copy built files from builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy nginx configuration (optional, falls du eine custom config brauchst)
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]

