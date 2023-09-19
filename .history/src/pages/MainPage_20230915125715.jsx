import { Outlet } from "react-router-dom";
import MainNavigation from "../components/UI/MainNavigation";

const MainPage = () => {
  return (
    <div className="flex">
      <MainNavigation />
      <Outlet/></Outlet>
    </div>
  );
};

export default MainPage;
