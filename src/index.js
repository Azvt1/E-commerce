import React from "react";
import { AppRoutes } from "./routes";
import "./styles/global.css";
import "./styles/variables.css";
import { RouterProvider, Route } from "react-router-dom";
import { createRoot } from "react-dom/client";
import ProtectedRoutes from "./protectedRoutes";

import App from "./App";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
