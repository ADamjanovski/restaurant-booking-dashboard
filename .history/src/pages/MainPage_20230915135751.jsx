import { Outlet } from "react-router-dom";
import MainNavigation from "../components/UI/MainNavigation";
import YourSVGComponent from "../assets/Reactlogo";

const MainPage = () => {
    const clickHandler = ()=>{
        
    }
  return (
    <div className="">
        <button onClick={clickHandler}>Click Me</button>
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
