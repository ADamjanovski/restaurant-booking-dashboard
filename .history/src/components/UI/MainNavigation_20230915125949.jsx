import { NavLink } from "react-router-dom";
import YourSVGComponent from "../../assets/Reactlogo";

const MainNavigation = () => {
  return (
    <div className="flex flex-col mt-4">
      <YourSVGComponent />
      <NavLink to="restaurantInformation">Restaurant Informatin</NavLink>
      <NavLink to="upcomingReservations">Upcoming Reservations</NavLink>
      <NavLink to="PastReservations">Past Reservations</NavLink>
    </div>
  );
};

export default MainNavigation;
