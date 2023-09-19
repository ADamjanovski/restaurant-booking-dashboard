import { NavLink } from "react-router-dom";

const MainNavigation = () => {
  return (
    <div className="hidden md:block">
      
      <nav className="flex flex-col w-72">
        <NavLink to="restaurantInformation" className="pr-10  p-3 border-r border-b">
          Restaurant Information
        </NavLink>
        <NavLink to="upcomingReservations" className="pr-5  p-3 border-r border-b">
          Upcoming Reservations
        </NavLink>
        <NavLink to="PastReservations " className="pr-5  p-3 border-r border-b">
          Past Reservations
        </NavLink>
        <NavLink to="tables " className="pr-5  p-3 border-r border-b">
          Tables
        </NavLink>
      </nav>
    </div>
  );
};

export default MainNavigation;
