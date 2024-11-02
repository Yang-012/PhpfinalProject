# 📖EBOOK網站架構
## 前端路由設定--React.js
```mermaid
graph TD
    A[首頁 /] --> B[書籍列表 /books]
    B --> C[書籍詳情 /books/:id]
    A --> D[購物車 /cart]
    A --> E[使用者頁 /user]
    E --> F[使用者資料 /user/profile]
    E --> G[訂單頁 /user/orders]
```
## 資料庫ER圖--Mysql
```mermaid
erDiagram
    USER {
        int id PK
        string name
        string email
        string password
    }
    
    BOOK {
        int id PK
        string title
        string author
        float price
        int stock
    }
    
    ORDER {
        int id PK
        date order_date
        float total_amount
        int user_id FK
    }

    ORDERITEM {
        int id PK
        int order_id FK
        int book_id FK
        int quantity
        float price
    }

    USER ||--o{ ORDER : places
    ORDER ||--|{ ORDERITEM : contains
    BOOK ||--o{ ORDERITEM : ordered_in
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

