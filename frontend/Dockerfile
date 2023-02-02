FROM node:16.16.0-alpine
WORKDIR /app/frontend/

COPY . .

RUN mkdir -p  build

RUN whoami

RUN chown node:node -R build

RUN npm install

EXPOSE 5173