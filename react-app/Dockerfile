FROM node:12.14.0-alpine3.11

RUN apk add --no-cache bash

WORKDIR /home/node/app

COPY ./react-app/package.json .

RUN npm install

COPY ./react-app .
COPY ./react-app/.env.example ./.env

EXPOSE 3000

CMD [ "npm", "start" ]
