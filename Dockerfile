# Stage 1: Build the application
FROM node:22 AS build
 
WORKDIR /app
 
# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install
 
# Copy the rest of the app
COPY . .
 
# Set default environment to 'prod
 
# Based on the environment, run either build or serve
RUN npm run build
 
# Stage 2: Use Nginx to serve the built application
FROM nginx:alpine
 
# Copy the built app from the build stage (if prod environment)
COPY --from=build /app/dist /usr/share/nginx/html
 
# Expose the port Nginx serves on
EXPOSE 80
 
# Run Nginx to serve the app
CMD ["nginx", "-g", "daemon off;"]

