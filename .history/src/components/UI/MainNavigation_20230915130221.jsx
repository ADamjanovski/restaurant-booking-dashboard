import { NavLink } from "react-router-dom";
import YourSVGComponent from "../../assets/Reactlogo";

const MainNavigation = () => {
  return (
    <div className="flex flex-col ">
      <div className="p-5  border-r">
        <YourSVGComponent />
      </div>
      <hr className="" />
      <nav className="">
        <NavLink to="restaurantInformation">Restaurant Informatin</NavLink>
        <NavLink to="upcomingReservations">Upcoming Reservations</NavLink>
        <NavLink to="PastReservations">Past Reservations</NavLink>
      </nav>
    </div>
  );
};

export default MainNavigation;
