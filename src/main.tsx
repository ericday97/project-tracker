import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { ConfigProvider, theme } from "antd";
import React from "react";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ConfigProvider theme={{ algorithm: theme.darkAlgorithm }}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ConfigProvider>
  </React.StrictMode>
);
