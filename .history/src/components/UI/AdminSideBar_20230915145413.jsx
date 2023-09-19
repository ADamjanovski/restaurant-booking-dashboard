import { Link } from "react-router-dom";

const AdminSideBar = ({ showSidebar, setShowSideBar }) => {
  return (
    <>
      <button
        className="text-4xl text-white items-center cursor-pointer fixed right-10 top-6 z-50"
        onClick={() => setShowSideBar(false)}
      >
        x
      </button>

      <div
        className={`top-0 right-0 w-[35vw] bg-secondary p-10 pl-20 text-white fixed h-full z-40  ease-in-out duration-300 ${
          showSidebar ? "translate-x-0 " : "translate-x-full"
        }`}
      >
        <div className="flex flex-col w-full">
          <Link>Personal Information</Link>
          <Link>Restaurants</Link>
        </div>
      </div>
    </>
  );
};

export default AdminSideBar;
