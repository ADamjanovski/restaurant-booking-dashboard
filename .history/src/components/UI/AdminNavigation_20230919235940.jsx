import { useContext } from "react";
import { NavLink } from "react-router-dom";
import AuthContext from "../../context/auth-context";

const AdminNavigation = () => {
  const authCtx = useContext(AuthContext);

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
      </nav>
      <button onClick={authCtx.logout} className="mt-2 text-center">Log Out</button>

    </div>
  );
};
export default AdminNavigation;
