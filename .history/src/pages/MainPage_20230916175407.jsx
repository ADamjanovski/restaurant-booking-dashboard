import { Outlet } from "react-router-dom";
import MainNavigation from "../components/UI/MainNavigation";
import YourSVGComponent from "../assets/Reactlogo";
import { useState } from "react";
import MainSidebar from "../components/UI/MainSidebar";
const MainPage = () => {
  const [showSidebar, setShowSideBar] = useState(false);
  const showSideBarHandler = () => {
    setShowSideBar(!showSidebar);
  };

  return (
    <div className="">
      <div className="p-5   border-b">
        <YourSVGComponent />
        {!showSidebar && (
          <button onClick={showSideBarHandler} className="md:hidden">
            <HamburgerIcon />
          </button>
        )}
      </div>
      {showSidebar && (
        <MainSidebar
          showSidebar={showSidebar}
          setShowSideBar={setShowSideBar}
        />
      )}
      <div className="flex">
        <MainNavigation />
        <Outlet />
      </div>
    </div>
  );
};

export default MainPage;
