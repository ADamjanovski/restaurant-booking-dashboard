import { useContext, useState } from "react";
import { useHttp } from "../../hooks/useHttp";
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
  const submitHandler = () => {
    // Check if any of the checkboxes have changed
    const hasChanged = data.some(
      (category, index) => category.checked !== initialCategories[index].checked
    );
    let checkedCategories = [];
    data.forEach((category) => {
      if (category.checked) {
        checkedCategories.push(category.name);
      }
    });
    console.log(checkedCategories);
    if (checkedCategories.length === 0) {
      // ctx.getRestaurants(checkedCategories);
      useHttp({
        url : `http://localhost:3000/api/dashboard/${authCtx.user.restaurantId}`
      })
      onClose();
      return;
    }
    if (!hasChanged) {
      // If nothing has changed, return early
      onClose();
      return;
    }
    ctx.getRestaurants(checkedCategories);
    onClose();
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
          Search Restaurants
        </button>
      </form>
    </>
  );
};

export default CategoryForm;
