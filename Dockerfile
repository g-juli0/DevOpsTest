FROM node:latest
WORKDIR /devopstest
COPY . /devopstest
RUN npm install
EXPOSE 8080
CMD ["node", "server.js"]