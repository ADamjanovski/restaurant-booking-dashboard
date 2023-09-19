import { Outlet } from "react-router-dom";
import MainNavigation from "../components/UI/MainNavigation";
import YourSVGComponent from "../assets/Reactlogo";
const MainPage = () => {
  const [showSidebar, setShowSideBar] = useState(false);
  const showSideBarHandler = () => {
    setShowSideBar(!showSidebar);
  };

  return (
    <div className="">
      <div className="p-5   border-b">
        <YourSVGComponent />
      </div>
      <div className="flex">
        <MainNavigation />
        <Outlet />
      </div>
    </div>
  );
};

export default MainPage;
