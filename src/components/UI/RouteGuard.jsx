import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import AuthContext from "../../context/auth-context";

const RouteGuard = (props) => {
  const ctx = useContext(AuthContext);
  const location = useLocation();
  if (!ctx.isLoggedIn) {
    return <Navigate to="/login" replace />;
  } else if (ctx.user.role === "PARTNER") {
    if (location.pathname.startsWith("/main")) {
      return props.children;
    }
    return <Navigate to="/main" replace />;
  } else if(ctx.user.role === "ADMIN"){
    if (location.pathname.startsWith("/admin")) {
      return props.children;
    }
    return <Navigate to="/admin" replace />;
  }
};

export default RouteGuard;
