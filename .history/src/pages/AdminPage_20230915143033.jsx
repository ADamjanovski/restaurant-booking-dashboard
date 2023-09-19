import YourSVGComponent from "../assets/Reactlogo";
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
