import { Outlet } from "react-router-dom";
import MainNavigation from "../components/UI/MainNavigation";
import YourSVGComponent from "../assets/Reactlogo";
const MainPage = () => {
  const [showSidebar, setShowSideBar] = useState(false);
  const showSideBarHandler = () => {
    setShowSideBar(!showSidebar);
  };
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
    const response = await data.json();
    console.log(response)
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
