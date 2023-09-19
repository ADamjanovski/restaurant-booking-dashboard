import { Link, NavLink } from "react-router-dom";

const MainSidebar = ({ showSidebar, setShowSideBar }) => {
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
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-accent m-3 ml-0 px-4 mb-0 pr-5  p-3  border-b"
                : "m-3 mb-0  ml-0 px-4 pr-5  p-3  border-b"
            }
            to="restaurantInformation"
          >
            Restaurant Information
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-accent m-3 ml-0 px-4 mb-0 pr-5  py-3  border-b"
                : "m-3 mb-0  ml-0 px-4 pr-5  py-3  border-b"
            }
            to="upcomingReservations"
          >
            Upcoming Reservations
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-accent m-3 ml-0 px-4 mb-0 pr-5  py-3  border-b"
                : "my-3 mb-0  ml-0 px-4 pr-5  py-3  border-b"
            }
            to="PastReservations"
          >
            Past Reservations
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default MainSidebar;
