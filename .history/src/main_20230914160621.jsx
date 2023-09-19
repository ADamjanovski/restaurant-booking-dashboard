import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { AuthContextProvider } from "./context/auth-context.jsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
    <AuthContextProvider>
      <BrowserRouter></BrowserRouter>
      <App />
    </AuthContextProvider>
);
