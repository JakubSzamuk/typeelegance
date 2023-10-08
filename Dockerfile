FROM node:18-alpine
WORKDIR /app
ADD / /app

RUN yarn install --production
RUN yarn add tailwindcss@latest postcss@latest autoprefixer@latest

RUN yarn build
EXPOSE 3000
CMD ["yarn", "start"]