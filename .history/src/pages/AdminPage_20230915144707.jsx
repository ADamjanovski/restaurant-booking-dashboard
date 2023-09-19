import HamburgerIcon from "../assets/HambugerIcon";
import YourSVGComponent from "../assets/Reactlogo";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import AdminSideBar from "../components/UI/AdminSideBar";
const AdminPage = () => {
  const [showSideBar, setShowSideBar] = useState(false);
  const showSideBarHandler = () => {
    setShowSideBar(!showSideBar);
  };
  return (
    <div className="">
      <div className="p-5   border-b flex justify-between">
        <YourSVGComponent />
        {!showSideBar && (
          <button onClick={showSideBarHandler} className="md:hidden">
            <HamburgerIcon />
          </button>
        )}
      </div>
      {showSideBar && <AdminSideBar showSideBar={showSideBar} />}
      <div className="flex">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminPage;
