import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import AuthContext from "../../context/auth-context";

const RouteGuard = (pros) => {
  const ctx = useContext(AuthContext);
  const location = useLocation();
  console.log(location);
  if (!ctx.isLoggedIn) {
    return <Navigate to="/login" replace />;
  } else if (ctx.user.role === "PARTNER") {
    if(location.pathname==="/main"){
        return ch
    }
    return <Navigate to="/main" replace />;
  } else {
    return <Navigate to="/admin" replace />;
  }
};

export default RouteGuard;
