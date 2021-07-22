FROM node:current-alpine3.14


WORKDIR /usr/app

COPY package*.json ./

RUN yarn install

COPY . .

EXPOSE 8080

CMD ["yarn", "run", "start"]