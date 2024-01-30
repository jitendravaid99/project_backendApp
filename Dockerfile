# Build dependencies
FROM node:18-alpine as dependencies
WORKDIR /app
COPY package*.json .
RUN npm i
COPY . .

CMD node server.json
