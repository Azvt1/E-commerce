import { Link, Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { AuthData } from "../../auth/authWrapper";
import { routes } from "../../routes";

export const RenderRoutes = () => {
  // const { user } = AuthData();
  return (
    <Routes>
      {routes.map((r, i) => {
        if (r.isPrivate && localStorage.getItem("isAuthenticated") === "true") {
          return <Route key={i} path={r.path} element={r.element} />;
        } else if (!r.isPrivate) {
          return <Route key={i} path={r.path} element={r.element} />;
        } else {
          return false;
        }
      })}
    </Routes>
  );
};
