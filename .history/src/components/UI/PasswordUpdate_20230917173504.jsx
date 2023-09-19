import { useRef } from "react";
import { useHttp } from "../../hooks/useHttp";

const PasswordUpdate = ({ userId }) => {
  const passwordInput = useRef();
  const confirmpassword = useRef();
  const ChangePasswordHandler = () => {};
  return (
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
      />
      <button className="bg-accent w-1/2 self-center md:self-start rounded-lg text-black mb-2">
        Change Password
      </button>
    </form>
  );
};

export default PasswordUpdate;
