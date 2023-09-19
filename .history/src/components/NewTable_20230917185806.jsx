import { useContext, useState } from "react";
import AuthContext from "../context/auth-context";
import useInput from "../hooks/use-input";

const NewRestaurant = () => {
  const ctx = useContext(AuthContext);
  const {
    value: numberInputValue,
    isValid: numberInputIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: seatsChangeHandler,
    inputBlurHandler: nameInputBlurHandler,
  } = useInput(isNotEmpty);

  
  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (!formIsValid) {
      return;
    }
    ctx.register({
      username: usernameInputValue,
      name: nameInputValue,
      phoneNumber: phoneValue,
      email: emailInputValue,
      password: passwordInputValue,
      logo: "concept-logo.png",
      numberOfTables: tablesInput,
    });
  };
  return (
    <div className="">
      <form className="flex flex-col my-4" onSubmit={formSubmitHandler}>
        <label htmlFor="username " className="mx-3 my-1 text-lg">
          Number of Seats
        </label>
        <input
          onChange={usernameChangeHandler}
          onBlur={usernameInputBlurHandler}
          type="number"
          id="username"
          placeholder="Enter username"
          className="mx-3 py-1 px-3 my-1 rounded-md"
          value={usernameInputValue}
        />
        <button className="border-1 bg-accent my-4 w-1/3 self-center rounded-lg p-2">
          Add Restaurant
        </button>
      </form>
    </div>
  );
};

export default NewRestaurant;
