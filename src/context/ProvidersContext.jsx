import React, { useState, createContext } from "react";

export const ProvidersContext = createContext();

export const ProvidersProvider = ({ children }) => {
  const [providers, setProviders] = useState([]);

  return (
    <ProvidersContext.Provider value={{ providers, setProviders }}>
      {children}
    </ProvidersContext.Provider>
  );
};
