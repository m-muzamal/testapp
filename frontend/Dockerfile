FROM node:18-alpine AS builder

WORKDIR /frontend

COPY package.json .

RUN npm install

COPY . .

# EXPOSE 5173

# CMD [ "npm", "run", "dev", "--", "--host" ]

RUN npm run build

FROM nginx:stable-alpine

COPY --from=builder /frontend/dist /bin

COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD [ "nginx", "-g", "daemon off;" ]