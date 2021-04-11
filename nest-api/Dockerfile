FROM node:12.14.0-alpine3.11

RUN apk add --no-cache bash
RUN npm install -g @nestjs/cli@7.5.6

WORKDIR /home/node/app

COPY ./nest-api/package.json .

RUN npm install

COPY ./nest-api .
COPY ./nest-api/.env.example ./.env

EXPOSE 3000

CMD [ "npm", "start" ]
