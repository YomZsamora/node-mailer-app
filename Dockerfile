# Use an official Node.js runtime as a parent image
FROM node:18

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json files
COPY package*.json ./
COPY npm-shrinkwrap.json ./

# Install project dependencies
RUN npm install

# Copy the entire project directory into the working directory
COPY . .

