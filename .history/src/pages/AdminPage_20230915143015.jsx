const AdminPage = () => {
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

export default AdminPage;
