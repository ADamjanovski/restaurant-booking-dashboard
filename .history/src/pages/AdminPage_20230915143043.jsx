import YourSVGComponent from "../assets/Reactlogo";
import { Outlet } from "react-router-dom";
const AdminPage = () => {
  return (
    <div className="">
      <div className="p-5   border-b">
        <YourSVGComponent />
      </div>
      <div className="flex">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminPage;
