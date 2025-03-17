# Use Node.js image for building
FROM node:18 AS build

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the entire project and build it
COPY . .
RUN npm run build

# Use Nginx to serve the build
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80 for frontend
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
