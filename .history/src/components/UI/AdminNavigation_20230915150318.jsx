import { NavLink } from "react-router-dom";
const AdminNavigation = () => {
  return (
    <div className="hidden md:block">
      <nav className="flex flex-col ">
        <NavLink
          to="restaurantInformation"
          className="pr-10  p-5 border-r border-b"
        >
          Personal Information
        </NavLink>
        <NavLink
          to="upcomingReservations"
          className="pr-5  p-3 border-r border-b"
        >
          Restaurants
        </NavLink>
      </nav>
    </div>
  );
};
export default AdminNavigation;
