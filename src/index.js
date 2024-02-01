import React from "react";
import ReactDOM from "react-dom"; // Правильный импорт
import { AppRoutes } from "./routes";
import "./styles/global.css";
import "./styles/variables.css"
import { RouterProvider } from "react-router-dom";
import { createRoot } from 'react-dom/client';

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={AppRoutes} />
  </React.StrictMode>
);
