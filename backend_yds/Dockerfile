# ---------------------------------
# Stage 1: Build the vite app
# ---------------------------------
FROM node:20 AS builder

# Set working directory
WORKDIR /app

# Copy package.json and lock file first 
COPY package*.json ./

#Install Dependencies
RUN npm install --legacy-peer-deps

# Copy all source code
COPY . .

# Build the Backend app
RUN npm run build

# Expose NestJS port
EXPOSE 3000

# Run the app
CMD ["node", "dist/main"]