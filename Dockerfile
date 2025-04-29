# Stage 1: Build or Dev Serve
FROM node:22 AS base

WORKDIR /app

COPY package*.json ./
RUN npm install
COPY . .

# Build Stage
FROM base AS build
ARG ENVIRONMENT=prod
RUN if [ "$ENVIRONMENT" = "prod" ]; then npm run build; fi

# Production stage with Nginx
FROM nginx:alpine AS prod
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

# Development stage
FROM base AS dev
EXPOSE 5173
CMD ["npm", "run", "serve"]

