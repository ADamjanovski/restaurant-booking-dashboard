import { useRef, useState } from "react";
import { useHttp } from "../../hooks/useHttp";
import AlertTitle from "@mui/material/AlertTitle";
import Alert from "@mui/material/Alert";

const PasswordUpdate = ({ userId }) => {
  const passwordInput = useRef();
  const [hasError, setHasError] = useState({
    hasError: false,
    message: "",
    title : ""
  });
  const [updatedData, setupdatedData] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const confirmpassword = useRef();
  const ChangePasswordHandler = (event) => {
    event.preventDefault();
    if (confirmpassword !== passwordInput) {
      setHasError({
        hasError: true,
        message: " Make sure password and confirm password are indentical !!",
      }),
        setTimeout(() => {
          setHasError(false);
        }, 5000);
      return;
    }
    setIsLoading(true);
  };
  return (
    <>
      <form className="mt-3 flex flex-col" onSubmit={ChangePasswordHandler}>
        <input
          type="password"
          className="mb-4  rounded-md px-3 py-1 md:w-3/4"
          placeholder="New Password"
          ref={passwordInput}
        />
        <input
          type="password"
          className="px-3 py-1 rounded-md mb-4 md:w-3/4 "
          placeholder="Confirm Password"
          ref={confirmpassword}
        />
        <button className="bg-accent w-1/2 self-center md:self-start rounded-lg text-black mb-2">
          Change Password
        </button>
      </form>
      {hasError.hasError && (
        <Alert severity="error">
          <AlertTitle>Wrong Credentials</AlertTitle>
          {hasError.message}
        </Alert>
      )}
      {isLoading && (
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={open}
          //   onClick={handleClose}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      )}
    </>
  );
};

export default PasswordUpdate;
