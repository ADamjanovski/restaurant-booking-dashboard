import HamburgerIcon from "../assets/HambugerIcon";
import YourSVGComponent from "../assets/Reactlogo";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import AdminSideBar from "../components/UI/AdminSideBar";
const AdminPage = () => {
  const [showSidebar, setShowSideBar] = useState(false);
  const showSideBarHandler = () => {
    setShowSideBar(!showSidebar);
  };
  return (
    <div className="">
      <div className="p-5   border-b flex justify-between">
        <YourSVGComponent />
        {!showSidebar && (
          <button onClick={showSideBarHandler} className="md:hidden">
            <HamburgerIcon />
          </button>
        )}
      </div>
      {showSidebar && (
        <AdminSideBar
          showSidebar={showSidebar}
          setShowSideBar={setShowSideBar}
        />
      )}
      
      <div className="flex">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminPage;
