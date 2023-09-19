import { useContext } from "react";
import Card from "./UI/Card";
import AuthContext from "../context/auth-context";
const RestaurantInformation = () => {
  const authCtx = useContext(AuthContext);
  const ChangePasswordHandler = ()=>{

  }
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

        </Card>
      </div>
  );
};

export default RestaurantInformation;
