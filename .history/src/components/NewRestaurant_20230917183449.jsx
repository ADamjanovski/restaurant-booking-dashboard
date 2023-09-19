import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import { useContext, useState } from "react";
import AuthContext from "../context/auth-context";
import useInput from "../hooks/use-input";
const isNotEmpty = (value) => value.trim() !== "";
const isEmail = (value) => value.includes("@");
const isStrong = (value) => value.length > 6;

const NewRestaurant = () => {
  const ctx = useContext(AuthContext);
  const [phoneValue, setPhoneValue] = useState();
  const {
    value: nameInputValue,
    isValid: nameInputIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameInputBlurHandler,
  } = useInput(isNotEmpty);

  const {
    value: usernameInputValue,
    isValid: usernameInputIsValid,
    hasError: usernameInputHasError,
    valueChangeHandler: usernameChangeHandler,
    inputBlurHandler: usernameInputBlurHandler,
  } = useInput(isNotEmpty);
  const {
    value: emailInputValue,
    isValid: emailInputIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailInputBlurHandler,
  } = useInput(isEmail);
  const {
    value: passwordInputValue,
    isValid: passwordInputIsValid,
    hasError: passwordInputHasError,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordInputBlurHandler,
  } = useInput(isStrong);
  const {
    value: tablesInput,
    isValid: tablesInputIsValid,
    hasError: tablesInputHasError,
    valueChangeHandler: tablesInputChangeHandler,
    inputBlurHandler: tablesInputInputBlurHandler,
  } = useInput((value) => value > 0);
  let formIsValid =
    emailInputIsValid &&
    nameInputIsValid &&
    passwordInputIsValid &&
    isValidPhoneNumber(phoneValue)
      ? true
      : false;
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
      numberOfTables : 
    });
  };
  return (
    <div className="">
      <form className="flex flex-col my-4" onSubmit={formSubmitHandler}>
        <label htmlFor="username " className="mx-3 my-1 text-lg">
          Username
        </label>
        <input
          onChange={usernameChangeHandler}
          onBlur={usernameInputBlurHandler}
          type="text"
          id="username"
          placeholder="Enter username"
          className="mx-3 py-1 px-3 my-1 rounded-md"
          value={usernameInputValue}
        />
        <label className="mx-3 my-1 text-lg">Name</label>
        <input
          onChange={nameChangeHandler}
          onBlur={nameInputBlurHandler}
          placeholder="Enter name of restaurant"
          className="px-3 py-1 mx-3 rounded-md"
          type="text"
          value={nameInputValue}
        />
        <label className="mx-3 my-1 text-lg">Email</label>
        <input
          onChange={emailChangeHandler}
          onBlur={emailInputBlurHandler}
          placeholder="Enter email"
          className="py-1 my-1  px-3 mx-3 rounded-md"
          type="text"
          value={emailInputValue}
        />
        <label className="mx-3 my-1 text-lg">Telephone number</label>
        <span className="mx-5 my-1">
          <PhoneInput
            defaultCountry="MK"
            value={phoneValue}
            onChange={setPhoneValue}
          />
        </span>
        <label className="mx-3 my-1 text-lg">Password</label>
        <input
          onChange={passwordChangeHandler}
          onBlur={passwordInputBlurHandler}
          type="password"
          placeholder="Enter password"
          className="mx-3 py-1 my-1 rounded-md pl-3"
          value={passwordInputValue}
        />
        <label  className="mx-3 my-1 text-lg">Number of Tables</label>
        <input
          type="number"
          placeholder="Enter number of tables"
          value={tablesInput}
          className="mx-3 py-1 my-1 rounded-md pl-3"
          onChange={tablesInputChangeHandler}
          onBlur={tablesInputInputBlurHandler}
        />
        <button className="border-1 bg-accent my-4 w-1/3 self-center rounded-lg p-2">
          Add Restaurant
        </button>
      </form>
    </div>
  );
};

export default NewRestaurant;
