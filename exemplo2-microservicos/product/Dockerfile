FROM node:8

ADD . src
WORKDIR /src
RUN npm i --silent
RUN npm i pm2 -g --silent
CMD ["pm2-docker", "app.js"]

EXPOSE 5000

