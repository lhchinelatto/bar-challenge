FROM node:12.3.1-alpine

WORKDIR /app

COPY views ./views
COPY controllers ./controllers
COPY mocks ./mocks
COPY routes ./routes
COPY package.json .
COPY server.js .

RUN npm install

ENV NODE_ENV production
ENV PORT 8080
EXPOSE 8080

CMD [ "npm", "start" ]