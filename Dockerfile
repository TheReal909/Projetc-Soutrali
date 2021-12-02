FROM node:14
WORKDIR /src

RUN npm install i npm@latest -g

COPY server-soutrali/package*.json ./
RUN npm install
COPY ./server-soutrali ./
COPY server-soutrali/app app
EXPOSE 8080


CMD [ "node", "server.js" ]