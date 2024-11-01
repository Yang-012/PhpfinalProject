# 使用 Apache 基礎映像
FROM httpd:alpine

# 複製 dist 資料夾到 Apache 的靜態文件目錄
COPY ./dist/ /usr/local/apache2/htdocs/

# 開放端口 80
EXPOSE 80
