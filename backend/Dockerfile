# Base image with PHP 8.2
FROM php:8.2-fpm

# Install necessary dependencies
RUN apt-get update && apt-get install -y \
    git \
    unzip \
    libpq-dev \
    && docker-php-ext-install pdo pdo_pgsql

# Install Composer
COPY --from=composer:2.5 /usr/bin/composer /usr/bin/composer

# Set the working directory
WORKDIR /var/www

# Copy project files to the container
COPY . /var/www

# Install Laravel dependencies (only if composer.json exists)
RUN if [ -f composer.json ]; then composer install; fi

# Permissions for storage and cache
RUN chown -R www-data:www-data /var/www/storage /var/www/bootstrap/cache
RUN chmod -R 775 /var/www/storage /var/www/bootstrap/cache

# Expose the port
EXPOSE 9000

# Command to start PHP-FPM
CMD ["php-fpm"]

# Xdebug
RUN pecl install xdebug \
    && docker-php-ext-enable xdebug
