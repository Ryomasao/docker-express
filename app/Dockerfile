FROM node:9.11-alpine
WORKDIR /var/www/html/app
RUN npm init -y
RUN npm install --save express express-generator
RUN ./node_modules/.bin/express --view=pug -f
RUN npm install

CMD npm start
