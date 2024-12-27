# Use an official Node.js runtime as a parent image
FROM node:18

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json first (for caching dependencies)
COPY package*.json ./

# Install dependencies
RUN npm install --only=production

# Copy the rest of the application files
COPY . .

# Expose the port the app runs on
EXPOSE 5000

# Define environment variables for PORT and CONNECTION_STRING
ENV PORT=5000
ENV CONNECTION_STRING="mongodb://localhost:27017/mydatabase"

# Command to run the application
CMD ["node", "./src/app.js"]