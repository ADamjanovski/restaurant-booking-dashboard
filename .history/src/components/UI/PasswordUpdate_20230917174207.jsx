import { useRef,useStatef } from "react";
import { useHttp } from "../../hooks/useHttp";
import AlertTitle from "@mui/material/AlertTitle";
import Alert from "@mui/material/Alert";

const PasswordUpdate = ({ userId }) => {
  const passwordInput = useRef();
  const [hasError, setHasError] = useState(false);
  const [updatedData, setupdatedData] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const confirmpassword = useRef();
  const ChangePasswordHandler = () => {
    if (confirmpassword !== passwordInput) {
      setHasError(true),
        setTimeout(() => {
          setHasError(false);
        }, 3000);
    }
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
      <Alert severity="error">
        <AlertTitle>Error</AlertTitle>
        This is an error alert — <strong>check it out!</strong>
      </Alert>
    </>
  );
};

export default PasswordUpdate;
