import { Link, NavLink } from "react-router-dom";

const AdminSidebar = ({ showSidebar, setShowSideBar }) => {
  return (
    <>
      <button
        className="text-4xl text-white items-center cursor-pointer fixed right-10 top-6 z-50"
        onClick={() => setShowSideBar(false)}
      >
        x
      </button>

      <div
        className={`top-0 right-0 w-[35vw] bg-secondary  text-white fixed h-full z-40  ease-in-out duration-300 ${
          showSidebar ? "translate-x-0 " : "translate-x-full"
        }`}
      >
        <div className="flex flex-col w-full mt-20 text-xl p-3 ">
          <NavLink className="mb-3 text-accent" to="personalInformation">Personal Information</NavLink>
          <NavLink className="text-accent" to="restaurants">Restaurants</NavLink>
        </div>
      </div>
    </>
  );
};

export default AdminSidebar;