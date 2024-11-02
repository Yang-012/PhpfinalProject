EBOOK網站架構
```mermaid
flowchart TD
    Client[客戶端 / 瀏覽器] --> |HTTP請求| WebServer[Web 伺服器]
    WebServer --> |API請求| Backend[後端應用]
    Backend --> |查詢| Database[數據庫]

    subgraph Frontend[前端]
        Client
    end

    subgraph Server[服務器端]
        WebServer
        Backend
    end

    subgraph Storage[存儲層]
        Database
    end
graph TD
    A[首頁 /] --> B[書籍列表 /books]
    B --> C[書籍詳情 /books/:id]
    A --> D[購物車 /cart]
    A --> E[使用者頁 /user]
    E --> F[使用者資料 /user/profile]
    E --> G[訂單頁 /user/orders]
\```


