import React from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import GoogleLoginButton from "./components/GoogleLoginButton";

const GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID;

function App() {
  return (
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      <div>
        <h1>React + Laravel Google OAuth</h1>
        <GoogleLoginButton />
      </div>
    </GoogleOAuthProvider>
  );
}

export default App;
