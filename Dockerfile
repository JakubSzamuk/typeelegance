FROM node:18-alpine
WORKDIR /app
ADD / /app

RUN yarn install --production --network-timeout 1000000
RUN yarn add tailwindcss@latest postcss@latest autoprefixer@latest

RUN yarn build
EXPOSE 3000
CMD ["yarn", "start"]