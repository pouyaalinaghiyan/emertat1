# Use the official Node.js runtime as the base image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY api/package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy the rest of the application code
COPY api/ ./

# Build the NestJS application
RUN npm run build

# Expose port 5000
EXPOSE 5000

# Set environment variable for NestJS
ENV NODE_ENV=production

# Start the application
CMD ["npm", "run", "start:prod"]


