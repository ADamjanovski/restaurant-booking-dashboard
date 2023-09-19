import { useContext, useEffect, useState } from "react";
import Card from "./UI/Card";
import AuthContext from "../context/auth-context";
import PasswordUpdate from "./UI/PasswordUpdate";
import { useHttp } from "../hooks/useHttp";
import Modal from "@mui/material/Modal";
import CategoryForm from "../compoments/UI/CategoryForm";
const RestaurantInformation = () => {
  const authCtx = useContext(AuthContext);
  const [categories, setCategories] = useState();
  useEffect(() => {
    useHttp({
      method: "GET",
      url: `http://localhost:3000/api/restaurant/${authCtx.user.restaurantId}`,
      headers: {
        Authorization: `Bearer ${authCtx.token}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }).then((data) => console.log(data));
  }, []);
  return (
    <div className="w-full h-full ">
      <Card className="text-start ">
        <div className="flex flex-col">
          <p className="border-neutral-600 border-b py-2 px-2">Name</p>
          <p className="py-2 px-2">
            {authCtx.user.name} {authCtx.user.lastName}
          </p>
          <p className="border-neutral-600 border-b py-2 px-2">Email</p>
          <p className="py-2 px-2">{authCtx.user.email}</p>
          <p className="border-neutral-600 border-b py-2 px-2">
            Change Password
          </p>
          <PasswordUpdate userId={authCtx.user.id} token={authCtx.token} />
          <p className="border-neutral-600 border-b py-2 px-2">Categories</p>
          {categories &&
            categories.length > 0 &&
            categories.map((category) => (
              <p className="py-2 px-2">category.name</p>
            ))}
          {(categories === undefined || categories.length === 0) && (
            <p className="self-center md:self-start  py-2 px-2">
              No Categories chosen for your restaurant choose some!!!
            </p>
          )}
          <button className="bg-accent w-1/2 self-center md:self-start rounded-lg text-black mb-2">
            Add a category
          </button>
        </div>
      </Card>
    </div>
  );
};

export default RestaurantInformation;
