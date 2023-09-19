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
    });
  };
  return (
    <div className="">
      <form className="flex flex-col my-4" onSubmit={formSubmitHandler}>
        <label htmlFor="username " className="mx-3">Username</label>
        <input type="text" id="username" className="mx-3" value={usernameInputValue} />
        <label className="mx-3">Name</label>
        <input className="bg-neutral-400  px-3 mx-3" type="text" value={nameInputValue} />
        <label className="mx-3 my-1">Email</label>
        <input className="bg-neutral-400 my-1  px-3 mx-3" type="text" value={emailInputValue} />

        <label className="mx-3">Telephone number</label>
        <span className="mx-5">
        <PhoneInput
          defaultCountry="MK"
          value={phoneValue}
          onChange={setPhoneValue}
          textInputStyle={{backgroundColor: "#FFF"} }
        /></span>
        <label className="mx-3">Password</label>
        <input type="password" className="mx-3" value={passwordInputValue} />
      </form>
    </div>
  );
};

export default NewRestaurant;
