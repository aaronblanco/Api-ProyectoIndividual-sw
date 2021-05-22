FROM node:alpine

RUN apk update && apk add --no-cache make git

WORKDIR /usr/src/app

COPY proyecto-sw/package.json proyecto-sw/package-lock.json /usr/src/app/

RUN npm i npm@latest -g && \
    npm install -g @angular/cli

RUN chown -R node /usr/src/app

COPY . /usr/src/app

USER node

WORKDIR /usr/src/app/proyecto-sw

CMD ng serve --host 0.0.0.0