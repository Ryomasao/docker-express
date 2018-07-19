FROM node:9.11-alpine
WORKDIR /var/www/html/app
COPY ./package.json /var/www/html/app/package.json
RUN npm install
CMD npm start