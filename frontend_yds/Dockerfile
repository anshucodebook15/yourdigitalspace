# ----------------------
# Stage 1: Build the Vite app
# ----------------------
FROM node:20 AS builder

# Set working directory
WORKDIR /app

# Copy package.json and lock file first (better caching)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all source code
COPY . .

# Build the Vite app
RUN npm run build


# ----------------------
# Stage 2: Run with serve
# ----------------------
FROM node:20-slim

WORKDIR /app

# Install "serve" globally to serve dist
RUN npm install -g serve

# Copy built files from builder stage
COPY --from=builder /app/dist ./dist

# Expose port (default: 3000)
EXPOSE 5173

# Start server
CMD ["serve", "-s", "dist", "-l", "5173"]
