# 使用 PHP 8.2 Apache 作為基礎鏡像
FROM php:8.2-apache

# 設置工作目錄為 /var/www/html
WORKDIR /var/www/html

# 安裝依賴，如 zip, unzip, git, curl 等，用於安裝 Composer 和 Laravel
USER root
RUN apt-get update && apt-get install -y \
    libzip-dev \
    zip \
    unzip \
    git \
    curl

# 安裝 Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# 啟用 Apache 的 mod_rewrite（Laravel 需要這個來支持友好 URL）
RUN a2enmod rewrite

# 使用更簡單的指令來創建用戶
RUN useradd -ms /bin/bash laraveluser || true

# 切換到 laraveluser
USER laraveluser

# 複製 Apache 配置文件
COPY ./000-default.conf /etc/apache2/sites-available/000-default.conf

# 允許 Dockerfile 生成後可直接運行
CMD ["apache2-foreground"]
