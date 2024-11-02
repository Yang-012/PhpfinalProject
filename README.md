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
前端架構README.md<br>
https://github.com/Yang-012/PhpfinalProject/edit/main/src/frontend/README.md
## 資料庫ER圖--Mysql
```mermaid
erDiagram
    Orders_header {
        INT order_id PK
        INT User_id FK "ref: Users.User_id"
        INT order_discount "default: 0"
        TIMESTAMP order_created_at "default: CURRENT_TIMESTAMP"
        VARCHAR order_status "ENUM: pending, paid, shipped, cancelled"
        VARCHAR order_payment "ENUM: credit_card, paypal, cash_on_delivery, bank_transfer"
        VARCHAR order_shipping "ENUM: home_delivery, store_pickup, locker_pickup"
    }
    Orders_Details {
        INT order_item_id PK
        INT order_id FK "ref: Orders_header.order_id"
        INT book_id FK "ref: Book.book_id"
        INT order_item_quantity "default: 1"
        INT order_item_price
    }
    Book {
        INT book_id PK
        VARCHAR title
        VARCHAR author
        VARCHAR publisher
        DATE publish_date
        VARCHAR category
        INT price
        INT quantity
        VARCHAR language
        VARCHAR isbn
        VARCHAR img
        TEXT summary
        TIMESTAMP updated_at "default: CURRENT_TIMESTAMP"
    }
    ShippingCarts {
        INT cart_id PK
        VARCHAR session_ID UNIQUE
        INT user_id UNIQUE "ref: Users.User_id"
        TIMESTAMP cart_updated_at "default: CURRENT_TIMESTAMP"
    }
    ShippingCarts_Products {
        INT cart_id FK "ref: ShippingCarts.cart_id"
        INT book_id FK "ref: Book.book_id"
        INT product_quantity "default: 1"
    }
    Users {
        INT User_id PK
        VARCHAR User_name
        VARCHAR User_email "UNIQUE"
        VARCHAR User_address
        VARCHAR User_password_hash
        CHAR User_phoneNumber
        TIMESTAMP User_created_at "default: CURRENT_TIMESTAMP"
    }

    Users ||--o{ Orders_header : "has"
    Orders_header ||--|{ Orders_Details : "contains"
    Book ||--o{ Orders_Details : "ordered_in"
    Users ||--o{ ShippingCarts : "owns"
    ShippingCarts ||--o{ ShippingCarts_Products : "contains"
    Book ||--o{ ShippingCarts_Products : "in_cart"
```
## 後端API 總覽--PHP-Laravel

### 用戶 API
| HTTP 方法 | 路徑            | 描述             |
|-----------|-----------------|------------------|
| GET       | /api/users      | 獲取所有用戶     |
| GET       | /api/users/:id  | 獲取特定用戶資料 |
| POST      | /api/users      | 新增用戶         |
| PUT       | /api/users/:id  | 更新用戶資料     |
| DELETE    | /api/users/:id  | 刪除用戶         |
### 書籍 API

| HTTP 方法 | 路徑            | 描述             |
|-----------|-----------------|------------------|
| GET       | /api/books      | 獲取所有書籍     |
| GET       | /api/books/:id  | 獲取特定書籍詳情 |
| POST      | /api/books      | 新增書籍         |
| PUT       | /api/books/:id  | 更新書籍資訊     |
| DELETE    | /api/books/:id  | 刪除書籍         |

