FROM php:7.2-apache
RUN apt-get update \
    && apt-get install -y \
        vim
# RUN rm /var/www/html/index.html
COPY src/ /var/www/html
EXPOSE 80 
CMD ["apache2ctl","-D", "FOREGROUND"]	

