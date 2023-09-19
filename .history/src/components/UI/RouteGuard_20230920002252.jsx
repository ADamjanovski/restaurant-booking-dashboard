import { useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import AuthContext from "../../context/auth-context";

const RouteGuard = () => {
  const navigate = useNavigate();
  const ctx = useContext(AuthContext);
  if (!ctx.isLoggedIn) {
    return <Navigate to="/login"
  } else if (ctx.user.role === "PARTNER") {
    navigate("/main");
  } else {
    navigate("/admin");
  }
  return <></>;
};

export default RouteGuard;
