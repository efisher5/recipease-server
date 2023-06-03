FROM node:lts

WORKDIR /menu-server-app

COPY . .

ARG DATABASE_URL=postgresql://postgres:Skimmer=10@localhost:5432/recipe-book?schema=rb

ENV DATABASE_URL $DATABASE_URL

RUN npm install

EXPOSE 3000

CMD npm run docker