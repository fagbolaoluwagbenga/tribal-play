FROM alpine:3.10

WORKDIR /app

COPY package*.json ./

LABEL maintainer="holard"

RUN apk add nodejs

RUN apk add npm

RUN npm i -g nodemon

RUN npm install 

EXPOSE 8080

CMD  ["nodemon", "app.js", "NODE_ENV=production"]