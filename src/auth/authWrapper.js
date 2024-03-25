import { createContext, useContext, useState } from "react";
import Login from "../pages/Login/Login";
import Homepage from "../pages/Home/Homepage";
import { RenderRoutes } from "../components/structure/RenderNavigation";

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

      const data = await response.json();

      if (data.success) {
        console.log("success");
        setUser({ email: email, isAuthenticated: true });
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.error("Errors loging in: ", error);
      return false;
    }
  };

  const logout = () => {
    setUser({ ...user, isAuthenticated: false });
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      <RenderRoutes />
    </AuthContext.Provider>
  );
};
