import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get("code");

    if (code) {
      // 發送驗證碼給後端，交換 Access Token
      axios
        .post("http://localhost:8081/api/auth/exchange-token", { code })
        .then((response) => {
          const { access_token } = response.data;

          // 儲存 Token 並跳轉到主頁
          localStorage.setItem("authToken", access_token);
          navigate("/admin"); // 導向到管理後台頁面
        })
        .catch((error) => {
          console.error("Token 交換失敗", error);
        });
    }
  }, []);

  return (
    <div>
      <h1>登入中...</h1>
    </div>
  );
};

export default Dashboard;
