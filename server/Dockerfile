FROM node:alpine

WORKDIR /fullcycle/app/server

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3001

CMD ["npm", "start"]