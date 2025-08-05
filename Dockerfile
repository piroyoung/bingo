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

# Copy pre-built application and public assets
COPY --chown=remix:nodejs ./build ./build
COPY --chown=remix:nodejs ./public ./public

# Switch to non-root user
USER remix

# Expose port
EXPOSE 3000

# Start the application
CMD ["npm", "start"]