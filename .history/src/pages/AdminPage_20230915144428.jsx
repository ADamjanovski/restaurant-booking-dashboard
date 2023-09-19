import HamburgerIcon from "../assets/HambugerIcon";
import YourSVGComponent from "../assets/Reactlogo";
import { Outlet } from "react-router-dom";
const AdminPage = () => {
  const [showSideBar, setShowSideBar] = useSate(false);
  return (
    <div className="">
      <div className="p-5   border-b flex justify-between">
        <YourSVGComponent />
        <button onClick={showSideBarHandler} className="md:hidden">
          <HamburgerIcon />
        </button>
      </div>
      <div className="flex">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminPage;
