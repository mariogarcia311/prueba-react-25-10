import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { AppRouter } from "./router/AppRouter.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
);
