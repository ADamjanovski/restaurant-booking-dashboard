import { useContext } from "react";
import Card from "./UI/Card";
import AuthContext from "../context/auth-context";
import PasswordUpdate from "./UI/PasswordUpdate";
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
        <p className="border-neutral-600 border-b py-2 px-2">Change Password</p>
        <PasswordUpdate userId={authCtx.user.id} />
      </Card>
    </div>
  );
};

export default RestaurantInformation;
