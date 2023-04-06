import axios from "axios";
import React, { useEffect, useState } from "react";

// Create Context API
const AuthContext = React.createContext({
  name: "",
  userId: "",
  role:"",
  token: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});

// Retrive Stored Token From Local Storage
const retriveStoredToken = () => {
  const storedToken = localStorage.getItem("token");

  return {
    token: storedToken,
  };
};

// Context Provider
export const AuthContextProvider = (props) => {
  const storedToken = retriveStoredToken();
  let initialToken;

  if (storedToken) {
    initialToken = storedToken.token;
  }

  // USE STATE
  const [token, setToken] = useState(initialToken);
  const [user, setUser] = useState({
    name: "",
    userId: "",
    address: "",
    phone: "",
    role:"",
  });

  // Check Token (!! = convert to Boolean)
  const userIsLoggedIn = !!token;

  // GET USER LOGIN DATA
  useEffect(() => {
    if (token) {
      axios
        .get("http://localhost:8082/api/users/me", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          setUser({
            name: res.data.name,
            userId: res.data.id,
            address: res.data.id,
            phone:res.data.phone,
            role:res.data.role,
          });
        })
        .catch((err) => {
          console.log(err.message);
          // Logout if the token is expired or incorrect
          logoutHandler();
        });
    }
  }, [token]);

  // LOGOUT
  const logoutHandler = () => {
    setToken(null);
    localStorage.removeItem("token");
  };

  // LOGIN
  const loginHandler = (token) => {
    setToken(token);
    localStorage.setItem("token", token);
  };

  // Context Value
  const contextValue = {
    name: user.name,
    userId: user.userId,
    role: user.role,
    address: user.address,
    phone: user.phone,
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