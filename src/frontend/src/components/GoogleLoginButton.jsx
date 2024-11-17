import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import axios from "axios";

const BACKEND_GOOGLE_API_URL = import.meta.env.VITE_BACKEND_GOOGLE_API_URL;

function GoogleLoginButton() {
  const handleLoginSuccess = (credentialResponse) => {
    const idToken = credentialResponse.credential;

    // 發送 ID Token 到後端進行驗證
    axios
      .post(BACKEND_GOOGLE_API_URL, { id_token: idToken }) // 使用環境變數
      .then((response) => {
        console.log("Login Success:", response.data);
      })
      .catch((error) => {
        console.error("Login Failed:", error);
      });
  };

  const handleLoginError = () => {
    console.error("Login Failed");
  };

  return (
    <GoogleLogin onSuccess={handleLoginSuccess} onError={handleLoginError} />
  );
}

export default GoogleLoginButton;
