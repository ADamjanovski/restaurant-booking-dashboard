import { useContext } from "react";
import { NavLink } from "react-router-dom";
import AuthContext from "../../context/auth-context";

const AdminSideBar = ({ showSidebar, setShowSideBar }) => {
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <>
      <button
        className="text-4xl text-white items-center cursor-pointer fixed right-10 top-6 z-50"
        onClick={() => setShowSideBar(false)}
      >
        x
      </button>

      <div
        className={`top-0 right-0 w-[35vw] bg-secondary  text-white fixed h-full z-40  ease-in-out duration-300 ${
          showSidebar ? "translate-x-0 " : "translate-x-full"
        }`}
      >
        <div className="flex flex-col w-full mt-20 text-xl p-3 ">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-accent my-3 ml-0 px-4 mb-0 pr-5  py-3  border-b"
                : "my-3 mb-0  ml-0 px-4 pr-5  py-3  border-b"
            }
            to="personalInformation"
          >
            Personal Information
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-accent my-3 ml-0 px-4 mb-0 pr-5  py-3  border-b"
                : "my-3 mb-0  ml-0 px-4 pr-5  py-3  border-b"
            }
            to="restaurants"
          >
            Restaurants
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-accent my-3 ml-0 px-4 mb-0 pr-5  py-3  border-b"
                : "my-3 mb-0  ml-0 px-4 pr-5  py-3  border-b"
            }
            to="partnerRequests"
          >
            Partner Requests
          </NavLink>
          <button
                      onClick={() => {
                        authCtx.logout;
                        navigate("/login");
                      }}
            className="my-3 mb-0  ml-0 px-4 pr-5  py-3  border-b text-start"
          >
            Log Out
          </button>
        </div>
      </div>
    </>
  );
};

export default AdminSideBar;
