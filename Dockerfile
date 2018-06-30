FROM node:8

WORKDIR /src
COPY ./package.json /src/package.json
RUN yarn install

COPY . /src
RUN yarn run build

EXPOSE 8080
CMD node server.js

