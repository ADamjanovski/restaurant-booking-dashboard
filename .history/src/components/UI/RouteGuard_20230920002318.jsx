import { useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../../context/auth-context";

const RouteGuard = () => {
  const ctx = useContext(AuthContext);
  if (!ctx.isLoggedIn) {
    return <Navigate to="/login" replace />;
  } else if (ctx.user.role === "PARTNER") {
    return <Navigate to="/main" replace />;
  } else {
    return <Navigate to="/admin" replace />;
  }
};

export default RouteGuard;
