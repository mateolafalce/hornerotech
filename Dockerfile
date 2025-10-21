# frontend

FROM node:22-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

EXPOSE 8084

CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]