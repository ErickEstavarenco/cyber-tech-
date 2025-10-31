import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx"; // <-- CORREÇÃO 1: Adicionado .jsx

// CORREÇÃO 2: Importando seu tema global (o 'index.css' foi removido)
import "./styles/globals.css"; 

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);