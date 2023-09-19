import { Outlet } from "react-router-dom";
import MainNavigation from "../components/UI/MainNavigation";
import YourSVGComponent from "../assets/Reactlogo";
enum Role {}
const MainPage = () => {
  const clickHandler = async () => {
    const data = await fetch("http://localhost:3000/api/dashboard", {
      method: "POST",
      body: JSON.stringify({
        name: "Andrej",
        username: "admin",
        email: "andrej@damjanovski.com",
        role: false,
        password: "strumica1",
      }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    const response = data.json();
    console.log(response)
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
