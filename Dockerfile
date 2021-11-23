FROM node:14

EXPOSE 8080

WORKDIR /src

RUN npm install i npm@latest -g

COPY server-soutrali/package*.json ./
RUN npm install
COPY server-soutrali/server.js ./
COPY server-soutrali/app app

CMD [ "node", "server.js" ]