# Use an official Node.js runtime as a parent image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json before running npm install
COPY package*.json ./

# Install dependencies
RUN npm install --only=production

# Copy the rest of the application
COPY . .

# Export the port the application is running
EXPOSE 3000

# Define the command to run the app
CMD [ "node" ,"server.js"]
