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
\```
