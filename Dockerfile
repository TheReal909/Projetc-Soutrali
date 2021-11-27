# FROM node:14 AS client
# WORKDIR /usr/src/app
# COPY vueClient/package*.json ./

# COPY ./vueClient/ ./
# RUN npm install && npm run build
# CMD [ "npm", "run", "serve" ]


FROM node:14 AS server
WORKDIR /src

RUN npm install i npm@latest -g

COPY server-soutrali/package*.json ./
RUN npm install
COPY ./server-soutrali ./
COPY server-soutrali/app app
EXPOSE 8080


CMD [ "node", "server.js" ]