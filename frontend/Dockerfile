FROM node:16-alpine3.11
RUN apk --update add --no-cache libc6-compat bash nano
WORKDIR /frontend
COPY package.json .
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]