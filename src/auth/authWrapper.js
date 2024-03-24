import { createContext, useContext, useState } from "react";
import { RenderHeader } from "../components/structure/Header";
import {
  RenderMenu,
  RenderRoutes,
} from "../components/structure/RenderNavigation";

const AuthContext = createContext();
export const AuthData = () => useContext(AuthContext);

export const AuthWrapper = () => {
  const [user, setUser] = useState({ email: "", isAuthenticated: false });

  const login = async (email, password) => {
    try {
      const response = await fetch("http://localhost:3000/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      response.json().then((data) => {
        if (data.success) {
          return new Promise((resolve, reject) => {
            if (password === "password") {
              setUser({ email: email, isAuthenticated: true });
              resolve("success");
            } else {
              reject("Incorrect password");
            }
          });
        }
      });
    } catch (error) {
      console.error("Errors loging in: ", error);
    }
  };
  const logout = () => {
    setUser({ ...user, isAuthenticated: false });
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      <>
        <RenderHeader />
        <RenderMenu />
        <RenderRoutes />
      </>
    </AuthContext.Provider>
  );
};
