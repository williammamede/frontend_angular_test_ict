FROM node:latest
MAINTAINER William Mamede
ENV PORT=4200
COPY . /var/www
WORKDIR /var/www
RUN npm install -g @angular/cli
RUN npm install 
ENTRYPOINT ["ng", "serve", "--host", "0.0.0.0"]
EXPOSE $PORT