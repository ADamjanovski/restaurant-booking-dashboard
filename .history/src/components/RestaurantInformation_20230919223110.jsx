import { useContext, useEffect, useState } from "react";
import Card from "./UI/Card";
import AuthContext from "../context/auth-context";
import PasswordUpdate from "./UI/PasswordUpdate";
import { useHttp } from "../hooks/useHttp";
import Modal from "@mui/material/Modal";
import CategoryForm from "./UI/CategoryForm";
const RestaurantInformation = () => {
  const authCtx = useContext(AuthContext);
  const [categories, setCategories] = useState();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [deletedCategory,setDeletedCategoy]=useState(false)
  const deleteCategory = async (id) => {
    try {
      const response = useHttp({
        method: "DELETE",
        url: `http://localhost:3000/api/dashboard/category/${id}`,
        headers: {
          Authorization: `Bearer ${authCtx.token}`,

        },
      });
      if (response.message !== undefined) {
        alert(response.message);
      }

    } catch (err) {
      alert(err.message);
    }
  };
  useEffect(() => {
    useHttp({
      method: "GET",
      url: `http://localhost:3000/api/dashboard/${authCtx.user.restaurantId}`,
      headers: {
        Authorization: `Bearer ${authCtx.token}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }).then((data) => setCategories(data));
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
          <p className="border-neutral-600 border-b py-2 px-2 mb-4">
            Categories
          </p>
          {categories &&
            categories.length > 0 &&
            categories.map((category) => (
              <div className="flex justify-between w-1/2 mb-3">
                <p className="py-2 px-2 w-24">{category.name}</p>
                <button
                  className="bg-accent rounded-lg p-1 "
                  onClick={() => deleteCategory(category.id)}
                >
                  Delete category
                </button>
              </div>
            ))}
          {(categories === undefined || categories.length === 0) && (
            <p className="self-center md:self-start  py-2 px-2">
              No Categories chosen for your restaurant choose some!!!
            </p>
          )}
          <button
            onClick={handleOpen}
            className="bg-accent w-1/2 self-center md:self-start rounded-lg text-black mb-2 p-1"
          >
            Add a category
          </button>
          {open && (
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <div className="absolute top-[15%] sm:left-[10%] left-[3%] lg:left-[25%] md:w-[600px] w-3/4 m-10 border-2 border-neutral-400 bg-secondary">
                <CategoryForm onClose={handleClose} />
              </div>
            </Modal>
          )}
        </div>
      </Card>
    </div>
  );
};

export default RestaurantInformation;
