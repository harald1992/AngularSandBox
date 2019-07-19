FROM node:8.12-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 55001

CMD ["node", "server"]
