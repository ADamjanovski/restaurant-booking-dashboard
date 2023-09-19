import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import AuthContext from "../../context/auth-context";

const AdminNavigation = () => {
  const authCtx = useContext(AuthContext);
  const navigate=useNavigate()
  return (
    <div className="hidden md:block">
      <nav className="flex flex-col w-72">
        <NavLink
          to="personalInformation"
          className={({ isActive }) =>
            isActive
              ? "text-accent  ml-0 px-4 mb-0 pr-5  p-3 border-r border-b"
              : "mb-0  ml-0 px-4 pr-5  p-3 border-r border-b"
          }
        >
          Personal Information
        </NavLink>
        <NavLink
          to="restaurants"
          className={({ isActive }) =>
            isActive
              ? "text-accent  ml-0 px-4 mb-0 pr-5  p-3 border-r border-b"
              : "mb-0  ml-0 px-4 pr-5  p-3 border-r border-b"
          }
        >
          Restaurants
        </NavLink>
        <NavLink
          to="partnerRequests "
          className={({ isActive }) =>
            isActive
              ? "text-accent  ml-0 px-4 mb-0 pr-5  p-3 border-r border-b"
              : "mb-0  ml-0 px-4 pr-5  p-3 border-r border-b"
          }
        >
          Partner Requests
        </NavLink>
        <button
          onClick={() =>{authCtx.logout;navigate("/login")}
          className="mb-0  ml-0 px-4 pr-5 text-start p-3 border-r border-b"
        >
          Log Out
        </button>
      </nav>
    </div>
  );
};
export default AdminNavigation;
