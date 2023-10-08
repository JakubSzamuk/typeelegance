FROM node:18-alpine
WORKDIR /app
ADD / /app

RUN yarn install --production

RUN yarn build
EXPOSE 3000
CMD ["yarn", "start"]