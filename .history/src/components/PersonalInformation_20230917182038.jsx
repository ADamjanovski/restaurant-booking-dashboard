import { useContext } from "react";
import AuthContext from "../context/auth-context";
import Card from "./UI/Card";

const PersonalInformation = () => {
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
        
      </Card>
    </div>
  );
};

export default PersonalInformation;
