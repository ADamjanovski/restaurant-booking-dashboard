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
        <PasswordUpdate userId={authCtx.user.id} token={authCtx.token} />
        <p className="border-neutral-600 border-b py-2 px-2">Categories</p>
        {authCtx.user.categories  && authCtx.user.categories.length > 0 &&
          authCtx.usercategories.map((category) => (
            <p>category.name</p>
          ))}
        {(authCtx.user.categories===undefined || authCtx.usercategories.length === 0) && (
          <p>No Categories chosen for your restaurant choose some!!!</p>
        )}
      </Card>
    </div>
  );
};

export default RestaurantInformation;
