import { NavLink } from "react-router-dom";

const MainNavigation = () => {
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
          <buttonc>Log Out</button>
      </nav>
    </div>
  );
};

export default MainNavigation;
