import { useContext } from "react";
import Card from "./UI/Card";
import AuthContext from "../context/auth-context";
const RestaurantInformation = () => {
  const authCtx = useContext(AuthContext);
  return (
      <div className="w-full h-full">
        <Card className="text-start ">
          <p className="border-neutral-600 border-b py-2 px-2">Name</p>
          <p className="py-2 px-2">
            {authCtx.user.name} {authCtx.user.lastName}
          </p>
          <p className="border-neutral-600 border-b py-2 px-2">Email</p>
          <p className="py-2 px-2">{authCtx.user.email}</p>
          <p className="border-neutral-600 border-b py-2 px-2">
            Change Password
          </p>
          <form className="mt-3 flex flex-col" onSubmit={}>
            <input
              type="password"
              className="mb-4  rounded-md px-3 py-1 md:w-3/4"
              placeholder="New Password"
            />
            <input
              type="password"
              className="px-3 py-1 rounded-md mb-4 md:w-3/4 "
              placeholder="Confirm Password"
            />
            <button className="bg-accent w-1/2 self-center md:self-start rounded-lg text-black mb-2">
              Change Password
            </button>
          </form>
        </Card>
      </div>
  );
};

export default RestaurantInformation;
