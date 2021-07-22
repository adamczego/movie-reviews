FROM node:current-alpine3.14 AS builder

WORKDIR /app

COPY . .

RUN yarn install && yarn build


FROM nginx:alpine

WORKDIR /usr/share/nginx/html

# Remove default nginx static assets
RUN rm -rf ./*
# Copy static assets from builder stage
COPY --from=builder /app/build .

ENTRYPOINT ["nginx", "-g", "daemon off;"]