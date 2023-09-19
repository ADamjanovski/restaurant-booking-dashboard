import { NavLink } from "react-router-dom";
const AdminNavigation = () => {
  return (
    <div className="hidden md:block">
      <nav className="flex flex-col w-400">
        <NavLink
          to="personalInformation"
          className="pr-56 p-3 border-r border-b"
        >
          Personal Information
        </NavLink>
        <NavLink
          to="restaurants"
          className="pr-5  p-3 border-r border-b"
        >
          Restaurants
        </NavLink>
      </nav>
    </div>
  );
};
export default AdminNavigation;
