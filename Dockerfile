FROM node:16-alpine

WORKDIR /app/

COPY package.json yarn.lock /app/

RUN yarn

RUN chown -R node node_modules/

USER node
