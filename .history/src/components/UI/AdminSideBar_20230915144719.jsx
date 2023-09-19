const AdminSideBar = (props) => {
  return (
    <div
      className={`top-0 right-0 w-[35vw] bg-blue-600  p-10 pl-20 text-white fixed h-full z-40  ease-in-out duration-300 ${
        showSidebar ? "translate-x-0 " : "translate-x-full"
      }`}
    >
      <h3 className="mt-20 text-4xl font-semibold text-white">
        I am a sidebar
      </h3>
    </div>
  );
};

export default AdminSideBar;
