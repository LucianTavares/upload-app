FROM node:alpine

WORKDIR /fullcycle/app/client

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "start"]