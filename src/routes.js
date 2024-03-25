import Homepage from "./pages/Home/Homepage";
import About from "./pages/About/About";
import { createBrowserRouter } from "react-router-dom";
import Nopage from "./pages/Nopage/Nopage";
import Shop from "./pages/Shop/Shop";
import ItemPage from "./pages/ItemPage/ItemPage";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

export const routes = [
  {
    path: "/home",
    element: <Homepage />,
    name: "Home",
    isMenu: true,
    isPrivate: true,
  },
  {
    path: "/about",
    element: <About />,
    name: "About",
    isMenu: true,
    isPrivate: true,
  },

  {
    path: "/shop",
    element: <Shop />,
    name: "Shop",
    isMenu: true,
    isPrivate: true,
  },

  {
    path: "/item/:id",
    element: <ItemPage />,
    name: "Shop",
    isMenu: true,
    isPrivate: true,
  },

  {
    path: "/nopage",
    element: <Nopage />,
    name: "Nopage",
    isMenu: false,
    isPrivate: false,
  },

  {
    path: "/*",
    element: <Login />,
    name: "Login",
    isMenu: false,
    isPrivate: false,
  },

  {
    path: "/login",
    element: <Login />,
    name: "Login",
    isMenu: false,
    isPrivate: false,
  },
  {
    path: "/register",
    element: <Register />,
    name: "Register",
    isMenu: false,
    isPrivate: false,
  },
];
