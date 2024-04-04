FROM nginx:alpine
COPY ./time.txt /usr/share/nginx/html
EXPOSE 8080
