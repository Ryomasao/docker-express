FROM node:9.11-alpine
WORKDIR /webpack
COPY ./package.json /webpack/package.json
COPY ./webpack.config.js /webpack/webpack.config.js
RUN npm install 
CMD npm run start