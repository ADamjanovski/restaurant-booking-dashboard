import { useContext, useState } from "react";
import { useHttp } from "../../hooks/useHttp";
import AuthContext from "../../context/auth-context";
const categories = [
  { name: "Show All", checked: false },
  { name: "Italian", checked: false },
  { name: "Healty ", checked: false },
  { name: "Indian ", checked: false },
  { name: "Korean", checked: false },
  { name: "Turkish ", checked: false },
  { name: "Breakfast", checked: false },
  { name: "Mexican", checked: false },
];
const CategoryForm = ({ onClose }) => {
  const authCtx = useContext(AuthContext);
  const [data, setData] = useState(
    categories.map((category) => ({ ...category }))
  );
  const changeCheck = (name) => {
    let temp = [...data];
    const index = temp.findIndex((item) => item.name === name);
    if (index === -1) return;
    temp[index].checked = !temp[index].checked;
    setData(temp);
  };
  const submitHandler = (event) => {
    // Check if any of the checkboxes have changed
    event.preventDefault();
    const hasChanged = data.some(
      (category, index) => category.checked !== categories[index].checked
    );
    let checkedCategories = [];
    data.forEach((category) => {
      if (category.checked) {
        checkedCategories.push(category.name);
      }
    });
    if (checkedCategories.length === 0) {
      // ctx.getRestaurants(checkedCategories);

      onClose();
      return;
    }
    if (!hasChanged) {
      // If nothing has changed, return early
      onClose();
      return;
    }
    console.log(authCtx.user.restaurantId);
    useHttp({
      url: `http://localhost:3000/api/dashboard/categories/${authCtx.user.restaurantId}?categories[]=${JSON.stringify(checkedCategories)}`,
      body: JSON.stringify(data),
      method: "POST",
      headers: {
        Authorization: `Bearer ${authCtx.token}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
  })onClose()
  };
  return (
    <>
      <form className="flex flex-col" onSubmit={submitHandler}>
        {data.map((category, index) => (
          <div key={index}>
            <input
              className="my-5 p-2 mx-3"
              type="checkbox"
              checked={category.checked}
              onChange={() => {
                changeCheck(category.name);
              }}
            />
            <label htmlFor={category.name} className="mx-3 text-xl ">
              {category.name}
            </label>
            <hr />
          </div>
        ))}
        <button className="my-5 p-2 mx-3 border rounded-md bg-accent self-center">
         Add Category
        </button>
      </form>
    </>
  );
};

export default CategoryForm;
