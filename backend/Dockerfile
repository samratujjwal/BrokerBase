FROM node:20-alpine
# Setting working directory inside the Container 
WORKDIR /app
# Copy all dependency files first
COPY package.json package-lock.json ./
# Install All Dependencies (including nodemon for dev) 
RUN npm install
# Copy application source code 
COPY . .
# Document the port this Container listen on 
EXPOSE 3002
# Start The app
CMD ["node","index.js"]
