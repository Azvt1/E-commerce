import Homepage from "./pages/Home/Homepage";
import About from "./pages/About/About";
import { createBrowserRouter } from "react-router-dom";
import Nopage from "./pages/Nopage/Nopage";

export const routes = [
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/about",
    element: <About />,
  },

  {
    path: "*",
    element: <Nopage />,
  },
];

export const AppRoutes = createBrowserRouter(routes);
