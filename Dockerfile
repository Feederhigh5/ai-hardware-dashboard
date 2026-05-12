FROM nginx:alpine
COPY index.html /usr/share/nginx/html/index.html
COPY input/ /usr/share/nginx/html/input/
EXPOSE 80
