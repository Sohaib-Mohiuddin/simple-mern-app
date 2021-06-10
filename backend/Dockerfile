FROM node:16-alpine3.11
RUN apk --update add --no-cache libc6-compat bash nano
WORKDIR /backend
COPY package.json .
RUN npm install
COPY . .
EXPOSE 5000
CMD ["node", "index.js"]