import { useContext, useState } from "react";
import AuthContext from "../context/auth-context";
import useInput from "../hooks/use-input";
import { useHttp } from "../hooks/useHttp";

const NewRestaurant = () => {
  const ctx = useContext(AuthContext);
  const {
    value: seatsInputValue,
    isValid: seatsInputIsValid,
    hasError: seatsInputHasError,
    valueChangeHandler: seatsChangeHandler,
    inputBlurHandler: seatsInputBlurHandler,
  } = useInput((value) => value > 0);

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (!seatsInputIsValid) {
      return;
    }
    const data = useHttp({
      method: "POST",
      url: "http://localhost:3000/api/dashboard/pastReservations",
      body: JSON.stringify({
        id: ctx.user.restaurantId,
        numberOfSeats: seatsInputValue,
      }),
      headers: {
        Authorization: `Bearer ${authCtx.token}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
  };
  return (
    <div className="">
      <form className="flex flex-col my-4" onSubmit={formSubmitHandler}>
        <label htmlFor="username " className="mx-3 my-1 text-lg">
          Number of Seats
        </label>
        <input
          onChange={seatsChangeHandler}
          onBlur={seatsInputBlurHandler}
          type="number"
          id="username"
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

export default NewRestaurant;
