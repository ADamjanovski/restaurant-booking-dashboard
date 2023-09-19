import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../context/auth-context";

const RouteGuard = () => {
  const navigate = useNavigate();
  const ctx = useContext(AuthContext);
  if (!ctx.isLoggedIn) {
    navigate("/login");
  } else if (ctx.user.role === "PARTNER") {
    navigate("/main");
  } else {
    navigate("/admin");
  }
  return <></>;
};

export default Route
