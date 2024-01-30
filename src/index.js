import React from "react";
import ReactDOM from "react-dom"; // Corrected import statement
import { AppRoutes } from "./routes";
import "./styles/global.css";
import { RouterProvider } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={AppRoutes} />
  </React.StrictMode>
);
