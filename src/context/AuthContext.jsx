import React, { useState, useEffect, createContext, useCallback } from "react";
import { refreshTokenApi } from "../api/auth";
import getToken from "../utils/getToken";

export const AuthContext = createContext();
const initialState = {
  loading: true,
  logged: false,
  nombre: null,
  correo: null,
};
export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(initialState);

  const logout = () => {
    localStorage.removeItem("token");
    setAuth({
      loading: false,
      logged: false,
    });
  };
  // eslint-disable-next-line
  const checkToken = useCallback(async () => {
    const token = getToken();
    if(!token){
      setAuth({
        loading: false,
        logged: false,
      })
      return false
    }
    else{
    const response = await refreshTokenApi(token);
    if (response.ok) {
      const { user, token } = response;
      localStorage.setItem("token", token);
      setAuth({
        loading: false,
        logged: true,
        nombre: user.nombre,
        correo: user.correo,
      });
      return true;
    } else {
      setAuth({
        loading: false,
        logged: false,
      });
      return false;
    }}
  });

  return (
    <AuthContext.Provider value={{ auth, setAuth, logout, checkToken }}>
      {children}
    </AuthContext.Provider>
  );
};
