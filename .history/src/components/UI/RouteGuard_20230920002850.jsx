import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import AuthContext from "../../context/auth-context";

const RouteGuard = () => {
  const ctx = useContext(AuthContext);
  const location=useLocation()
  if (!ctx.isLoggedIn) {
    return <Navigate to="/login" replace />;
  } else if (ctx.user.role === "PARTNER") {
    return <Navigate to="/main" replace />;
  } else {
    return <Navigate to="/admin" replace />;
  }
};

export default RouteGuard;
