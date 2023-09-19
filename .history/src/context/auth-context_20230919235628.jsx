import React, { useCallback, useState } from "react";
let logoutTimer;
const AuthContext = React.createContext({
  token: "",
  refreshToken: "",
  isLoggedIn: false,
  user: null,
  register: (user) => {},
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
          restaurantId: user.restaurantId,
          categories: user.restaurant ? user.restaurant.categories : null,
        })
      );
      localStorage.setItem("authToken", user.accessToken);
      setUser({
        id: user.id,
        name: user.name,
        lastName: user.lastName,
        email: user.email,
        role: user.role,
        restaurantId: user.restaurantId,
        categories: user.restaurant ? user.restaurant.categories : null,
      });
      setToken(user.accessToken);
      setRefreshToken(user.refreshToken);

      return {
        loggedIn: true,
        role: user.role,
      };
    } catch (err) {
      alert(err.message);
      return {
        loggedIn: false,
      };
    }
  };

  const registerHandler = async (User) => {
    try {
      const data = await fetch("http://localhost:3000/api/dashboard", {
        method: "POST",
        body: JSON.stringify({
          name: User.name,
          username: User.username,
          number: User.phoneNumber,
          role: "PARTNER",
          email: User.email,
          password: User.password,
          logo: User.logo,
          numberOfTables: User.numberOfTables,
        }),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      const newUser = await data.json();
      if (newUser.message !== null) {
        alert(newUser.message);
      } else {
        setToken(newUser.accessToken);
        setRefreshToken(newUser.refreshToken);
        // return <Navigate replace to="/home" />;
      }
    } catch (err) {
      alert(err);
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
    register: registerHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
