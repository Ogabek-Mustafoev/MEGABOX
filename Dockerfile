FROM node:20.10.0-alpine

WORKDIR /app

COPY package.json yarn.lock* ./

RUN yarn install --frozen-lockfile --production

COPY . .

RUN yarn build

EXPOSE 3000

CMD ["yarn", "start"]
