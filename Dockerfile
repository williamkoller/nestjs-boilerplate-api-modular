FROM node:18.19.1-alpine

WORKDIR /app

RUN mkdir -p /app

COPY package.json /app

RUN yarn cache clean \
  rm -rf node_modules \
  yarn install --frozen-lockfile

COPY . /app

EXPOSE 3000