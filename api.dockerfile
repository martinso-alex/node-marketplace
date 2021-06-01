FROM node:14-alpine
WORKDIR /app
COPY ./api/package.json ./
COPY ./api/yarn.lock ./
RUN yarn install
COPY . .
