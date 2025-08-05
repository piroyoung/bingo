# Production image with pre-built application
FROM node:18-alpine AS production

# Create non-root user for security
RUN addgroup -g 1001 -S nodejs && \
    adduser -S remix -u 1001

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install only production dependencies
RUN npm ci --only=production

# Copy pre-built application
COPY --chown=remix:nodejs ./build ./build

# Switch to non-root user
USER remix

# Expose port
EXPOSE 3000

# Start the application using full path
CMD ["node_modules/.bin/remix-serve", "build/index.js"]