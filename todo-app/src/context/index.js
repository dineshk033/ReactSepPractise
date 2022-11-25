import React from "react";
import { AxiosInstance } from "../axios";

export const AuthContext = React.createContext();
const AuthProvider = ({ children }) => {
  const login = (arg, callback) => {
    AxiosInstance.post("/user/login", arg)
      .then((res) => {
        console.log(res);
        localStorage.setItem("jwt_token", res.data.token);
        callback();
      })
      .catch((err) => console.log(err));
  };
  let value = { login };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
