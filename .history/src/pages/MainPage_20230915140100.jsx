import { Outlet } from "react-router-dom";
import MainNavigation from "../components/UI/MainNavigation";
import YourSVGComponent from "../assets/Reactlogo";

const MainPage = () => {
  const clickHandler = async () => {
    const data = await fetch("http://localhost:3000/api/dashboard", {
      method: "POST",
      body: {
        name: "Andrej",
        username: "admin",
        email: "andrej@damjanovski.com",
        role: ADMIN,
        password: "strumica1",
      },
    });
  };
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
