import { Outlet } from "react-router-dom";
import MainNavigation from "../components/UI/MainNavigation";
import YourSVGComponent from "../assets/Reactlogo";

const MainPage = () => {
  return (
    <div className="">
    <div className="p-5  border-r border-b">
        <YourSVGComponent />
      </div>
      <div></div>
      <MainNavigation />
      <Outlet/>
    </div>
  );
};

export default MainPage;
