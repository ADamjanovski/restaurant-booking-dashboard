import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import AuthContext from "../../context/auth-context";

const MainNavigation = () => {
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <div className="hidden md:block">
      <nav className="flex flex-col w-72">
        <NavLink
          to="restaurantInformation"
          className={({ isActive }) =>
            isActive
              ? "text-accent  ml-0 px-4 mb-0 pr-5  p-3 border-r border-b"
              : "mb-0  ml-0 px-4 pr-5  p-3 border-r border-b"
          }
        >
          Restaurant Information
        </NavLink>
        <NavLink
          to="upcomingReservations"
          className={({ isActive }) =>
            isActive
              ? "text-accent  ml-0 px-4 mb-0 pr-5  p-3 border-r border-b"
              : "mb-0  ml-0 px-4 pr-5  p-3 border-r border-b"
          }
        >
          Upcoming Reservations
        </NavLink>
        <NavLink
          to="PastReservations "
          className={({ isActive }) =>
            isActive
              ? "text-accent  ml-0 px-4 mb-0 pr-5  p-3 border-r border-b"
              : "mb-0  ml-0 px-4 pr-5  p-3 border-r border-b"
          }
        >
          Past Reservations
        </NavLink>
        <NavLink
          to="tables "
          className={({ isActive }) =>
            isActive
              ? "text-accent  ml-0 px-4 mb-0 pr-5  p-3 border-r border-b"
              : "mb-0  ml-0 px-4 pr-5  p-3 border-r border-b"
          }
        >
          Tables
        </NavLink>
        <NavLink
          to="images "
          className={({ isActive }) =>
            isActive
              ? "text-accent  ml-0 px-4 mb-0 pr-5  p-3 border-r border-b"
              : "mb-0  ml-0 px-4 pr-5  p-3 border-r border-b"
          }
        >
          Images
        </NavLink>
        <button
          onClick={() => {
            authCtx.logout();
            navigate("/login");
          }}
          className="mb-0  ml-0 px-4 pr-5 text-start p-3 border-r border-b"
        >
          Log Out
        </button>
      </nav>
    </div>
  );
};

export default MainNavigation;
