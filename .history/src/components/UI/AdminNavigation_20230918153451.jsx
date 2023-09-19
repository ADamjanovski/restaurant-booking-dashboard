import { NavLink } from "react-router-dom";
const AdminNavigation = () => {
  return (
    <div className="hidden md:block">
      <nav className="flex flex-col w-72">
        <NavLink
          to="personalInformation"
          className="pr p-3 border-r border-b"
        >
          Personal Information
        </NavLink>
        <NavLink
          to="restaurants"
          className={({ isActive }) =>
                  isActive
                    ? "text-accent m-3 ml-0 px-4 mb-0 pr-5  p-3 border-r border-b"
                    : "m-3 mb-0  ml-0 px-4 pr-5  p-3 border-r border-b"
                }
        >
          Restaurants
        </NavLink>
      </nav>
    </div>
  );
};
export default AdminNavigation;
