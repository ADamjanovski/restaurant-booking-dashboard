import { NavLink } from "react-router-dom";
import YourSVGComponent from "../../assets/Reactlogo";

const MainNavigation = () => {
  return (
    <div className=" ">
      <div className="p-5  border-r">
        <YourSVGComponent />
      </div>
      <hr className="" />
      <nav className="flex flex-col m-5">
        <NavLink to="restaurantInformation">Restaurant Informatin</NavLink>
        <NavLink to="upcomingReservations">Upcoming Reservations</NavLink>
        <NavLink to="PastReservations">Past Reservations</NavLink>
      </nav>
    </div>
  );
};

export default MainNavigation;
