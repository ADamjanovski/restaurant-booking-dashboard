import { Outlet } from "react-router-dom";
import MainNavigation from "../components/UI/MainNavigation";

const MainPage = () => {
  return (
    <div className="flex">
        <div className="p-5  border-r border-b">
        <YourSVGComponent />
      </div>
      <MainNavigation />
      <Outlet/>
    </div>
  );
};

export default MainPage;
