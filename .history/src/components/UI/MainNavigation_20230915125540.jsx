import { NavLink } from "react-router-dom";

const MainNavigation = () => {
  return (
    <div>
      <NavLink to="restaurantInformation">Restaurant Informatin</NavLink>
      <NavLink to="restaurantInformation">Upcoming Reservations</NavLink>
      <NavLink to="restaurantInformation">Past Reservations</NavLink>
    </div>
  );
};

export default MainNavigation;
