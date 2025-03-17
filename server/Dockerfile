# Use Node.js as the base image
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies inside Docker
RUN npm install && npm rebuild bcrypt --build-from-source

# Copy the rest of the app files
COPY . .

# Expose the port
EXPOSE 3000

# Start the server
CMD ["node", "index.js"]
