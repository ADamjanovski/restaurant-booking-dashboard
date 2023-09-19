import { NavLink } from "react-router-dom";

const MainNavigation = () => {
  return (
    <div>
      <NavLink path>Restaurant Informatin</NavLink>
      <NavLink>Upcoming Reservations</NavLink>
      <NavLink>Past Reservations</NavLink>
    </div>
  );
};

export default MainNavigation;
