import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  server: {
    https: {
      key: "./key.pem",
      cert: "./cert.pem",
    },
    port: 5173,
  },
  plugins: [react()],
});
