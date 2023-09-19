import React, { useCallback, useState } from "react";
let logoutTimer;
const AuthContext = React.createContext({
  token: "",
  refreshToken: "",
  isLoggedIn: false,
  user: null,
  login: (username, password) => {},
  logout: (id) => {},
});

const calculateRemainingTime = (expirationTime) => {
  const currentTime = new Date().getTime();
  const adjExpirationTime = new Date(expirationTime).getTime();

  const remainingTime = adjExpirationTime - currentTime;
  return remainingTime;
};

const redreveStoredToken = () => {
  const storedToken = localStorage.getItem("authToken");
  // const storedExpirationDate = localStorage.getItem("expirationTime");
  // const remainingTime = calculateRemainingTime(storedExpirationDate);
  // if (remainingTime <= 3600) {
  //   localStorage.removeItem("authToken");
  //   localStorage.removeItem("expirationTime");
  //   return null;
  // }
  return {
    token: storedToken,
    // remainingTime: remainingTime,
  };
};

export const AuthContextProvider = (props) => {
  const tokenData = redreveStoredToken();
  let userIsLoggedIn = false;
  let initialToken = "";
  let initialUser = {};
  if (tokenData) {
    initialUser = JSON.parse(localStorage.getItem("user"));
    initialToken = tokenData.token;
  }
  const [token, setToken] = useState(initialToken);
  const [refreshToken, setRefreshToken] = useState("");
  const [user, setUser] = useState(initialUser);

  const logoutHandler = useCallback(async (id) => {
    localStorage.removeItem("user");
    localStorage.removeItem("authToken");
    setUser(null);
    setToken(null);
  }, []);

  const loginHandler = async (username, password) => {
    try {
      const data = await fetch("http://localhost:3000/api/dashboard/login", {
        method: "POST",
        body: JSON.stringify({
          username: username,
          password: password,
        }),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      const user = await data.json();
      console.log(user);
      if (user.message) {
        throw new Error(user.message);
      }
      localStorage.setItem(
        "user",
        JSON.stringify({
          id: user.id,
          name: user.name,
          email: user.email,
          role: user.role,
        })
      );
      localStorage.setItem("authToken", user.accessToken);
      setToken(user.accessToken);
      setRefreshToken(user.refreshToken);
      setUser({
        id: user.id,
        name: user.name,
        lastName: user.lastName,
        email: user.email,
      });
      return true;
    } catch (err) {
      alert(err.message);
      return false;
    }
  };



  
  if (user) {
    userIsLoggedIn = true;
  }
  const contextValue = {
    user,
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
