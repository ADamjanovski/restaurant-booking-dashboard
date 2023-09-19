import { NavLink } from "react-router-dom";
import YourSVGComponent from "../../assets/Reactlogo";

const MainNavigation = () => {
  return (
    <div className=" ">
      <div className="p-5  border-r">
        <YourSVGComponent />
      </div>
      <hr className="" />
      <nav className="flex flex-col p-5">
        <NavLink to="restaurantInformation" className="mb-3 border-r">
          Restaurant Informatin
        </NavLink>
        <NavLink to="upcomingReservations" className="mb-3">
          Upcoming Reservations
        </NavLink>
        <NavLink to="PastReservations " className="mb-3">
          Past Reservations
        </NavLink>
      </nav>
    </div>
  );
};

export default MainNavigation;
