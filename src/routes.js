import Homepage from "./pages/Home/Homepage";
import About from "./pages/About/About";
import { createBrowserRouter } from "react-router-dom";

export const routes = [
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/about",
    element: <About />,
  },
];

export const AppRoutes = createBrowserRouter(routes);
