import { NavLink } from "react-router-dom";
import YourSVGComponent from "../../assets/Reactlogo";

const MainNavigation = () => {
  return (
    <div className=" ">
      <div className="p-5  border-r ">
        <YourSVGComponent />
      </div>
      <hr className="" />
      <nav className="flex flex-col ">
        <NavLink to="restaurantInformation" className=" p-3 border-r border-b">
          Restaurant Information
        </NavLink>
        <NavLink to="upcomingReservations" className="  p-3 border-r border-b">
          Upcoming Reservations
        </NavLink>
        <NavLink to="PastReservations " className=" p-3 border-r border-b">
          Past Reservations
        </NavLink>
      </nav>
    </div>
  );
};

export default MainNavigation;
