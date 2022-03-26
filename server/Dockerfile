FROM node:17-alpine

RUN mkdir -p /home/app/node_modules 

WORKDIR /home/app

COPY package*.json ./

COPY src/ src/

RUN npm install \
    && npm run build

EXPOSE 4000

USER node

CMD ["npm", "run", "server"]