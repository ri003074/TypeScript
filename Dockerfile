FROM node:12.20.0
WORKDIR /app/

COPY package*.json /app/
COPY tsconfig.json /app/
RUN npm install
