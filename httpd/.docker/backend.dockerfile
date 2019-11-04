FROM php:7.1.8-apache
MAINTAINER William Mamede
ENV PORT=80
COPY . /var/www/html
COPY .docker/vhost.conf /etc/apache2/sites-available/000-default.conf
WORKDIR /var/www/html
EXPOSE $PORT
RUN chown -R www-data:www-data /var/www/html \
    && a2enmod rewrite