FROM node:22-alpine

WORKDIR /app

COPY package*.json ./


RUN npm install

COPY . .

#ENV key=value

EXPOSE 1268
EXPOSE 1269


CMD [ "npm", "start" ]
