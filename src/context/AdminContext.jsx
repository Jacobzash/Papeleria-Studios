import React, { useState, createContext } from "react";

export const AdminContext = createContext();

export const AdminProvider = ({ children }) => {
  const [providers, setProviders] = useState();
  const [categories, setCategories] = useState();
  const [products, setProducts] = useState();
  const [inventory, setInventory] = useState();
  const [tmp, setTmp] = useState();

  return (
    <AdminContext.Provider
      value={{
        providers,
        categories,
        setProviders,
        setCategories,
        products,
        setProducts,
        inventory,
        setInventory,
        tmp,
        setTmp,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};
