import { useContext, useState } from "react";
import AuthContext from "../context/auth-context";
import useInput from "../hooks/use-input";
import { useHttp } from "../hooks/useHttp";

const NewTable = () => {
  const ctx = useContext(AuthContext);
  const {
    value: seatsInputValue,
    isValid: seatsInputIsValid,
    hasError: seatsInputHasError,
    valueChangeHandler: seatsChangeHandler,
    inputBlurHandler: seatsInputBlurHandler,
  } = useInput((value) => value > 0);
  const {
    value: tableInputValue,
    isValid: tableInputIsValid,
    hasError: tableInputHasError,
    valueChangeHandler: tableChangeHandler,
    inputBlurHandler: tableInputBlurHandler,
  } = useInput((value) => value > 0);
  const formSubmitHandler = async (event) => {
    event.preventDefault();
    if (!seatsInputIsValid) {
      return;
    }
    const data = await useHttp({
      method: "POST",
      url: "http://localhost:3000/api/dashboard/tables",
      body: JSON.stringify({
        id: ctx.user.restaurantId,
        numberOfSeats: seatsInputValue,
      }),
      headers: {
        Authorization: `Bearer ${ctx.token}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    console.log(data);
  };
  return (
    <div className="">
      <form className="flex flex-col my-4" onSubmit={formSubmitHandler}>
        <label htmlFor="seats " className="mx-3 my-1 text-lg">
          Number of Seats
        </label>
        <input
          onChange={seatsChangeHandler}
          onBlur={seatsInputBlurHandler}
          type="number"
          id="seats"
          placeholder="Enter number of seats"
          className="mx-3 py-1 px-3 my-1 rounded-md"
          value={seatsInputValue}
        />
        <label htmlFor="seats " className="mx-3 my-1 text-lg">
          Number of Seats
        </label>
        <input
          onChange={seatsChangeHandler}
          onBlur={seatsInputBlurHandler}
          type="number"
          id="seats"
          placeholder="Enter number of seats"
          className="mx-3 py-1 px-3 my-1 rounded-md"
          value={seatsInputValue}
        />
        <button className="border-1 bg-accent my-4 w-1/3 self-center rounded-lg p-2">
          Add Restaurant
        </button>
      </form>
    </div>
  );
};

export default NewTable;
