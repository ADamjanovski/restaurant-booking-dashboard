import { NavLink } from "react-router-dom";

const MainNavigation = () => {
  return (
    <div className="">
      
      <nav className="flex flex-col ">
        <NavLink to="restaurantInformation" className="pr-5  p-3 border-r border-b">
          Restaurant Information
        </NavLink>
        <NavLink to="upcomingReservations" className="pr-5  p-3 border-r border-b">
          Upcoming Reservations
        </NavLink>
        <NavLink to="PastReservations " className="pr-5  p-3 border-r border-b">
          Past Reservations
        </NavLink>
      </nav>
    </div>
  );
};

export default MainNavigation;
