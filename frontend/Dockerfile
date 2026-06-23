FROM node:20-alpine AS builder
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

# Build time argument -injected during docker build 
ARG REACT_APP_API_BASE_URL
ENV REACT_APP_API_BASE_URL=$REACT_APP_API_BASE_URL
COPY . .
RUN npm run build 

# Stage 2 : Serve with Nginx

FROM nginx:alpine
# Remove Default nginx page 
RUN rm -rf /usr/share/nginx/html/*
# Copy build files from stage 1
COPY --from=builder /app/build /usr/share/nginx/html
# Copy custom nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx","-g","daemon off;"]