
FROM nginx:alpine

WORKDIR /usr/share/nginx/html

# Remove default nginx static assets
RUN rm -rf ./*
# Copy static assets from builder stage
COPY build .

ENTRYPOINT ["nginx", "-g", "daemon off;"]