FROM node:16-alpine as builder

RUN mkdir /app
WORKDIR /app

ENV PORT=5000

COPY package.json .
COPY yarn.lock .

RUN yarn global add pm2 && yarn

COPY . .

EXPOSE $PORT
CMD ["yarn", "production"]
