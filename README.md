# 📖EBOOK網站

## 網站架構
```mermaid
graph TD
    Buyer[買家] --> ReactApp[React 前端]
    Seller[賣家] --> ReactApp
    Admin[總管理者] --> ReactApp

    ReactApp -->|REST API | LaravelAPI[Laravel 後端]
    LaravelAPI --> MySQL[(MySQL 資料庫)]
```
## 前端架構README.md<br>
https://github.com/Yang-012/PhpfinalProject/edit/main/src/frontend
## 後端架構README.md<br>
https://github.com/Yang-012/PhpfinalProject/blob/main/src/severice1
