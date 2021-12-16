import React, { useState, useContext, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { AdminContext } from "../../../context/AdminContext";

export const InputSearchVentas = ({ ventas, setVentas }) => {
  const { inventory, setInventory, tmp, setTmp } = useContext(AdminContext);
  useEffect(() => {
    setTmp(inventory);
    // eslint-disable-next-line
  }, []);
  const [input, setInput] = useState(null);
  const [flag, setFlag] = useState(false);
  const handleChange = (e, newValue) => {
    console.log(newValue);
    setInput(newValue);
    if (newValue !== null) {
      if (inventory.length > 1) {
        setInventory(
          inventory.filter((inventory) => inventory.id !== newValue.id)
        );
        setFlag(false);
      } else {
        setFlag(true);
      }
      console.log(inventory);
      setVentas([...ventas, { ...newValue, cantidad: 1, setFlag }]);
      setInput(null);
    }
  };
  return (
    <Autocomplete
      id="buscar-producto"
      options={inventory}
      onChange={handleChange}
      value={input}
      disabled={flag}
      getOptionLabel={(item) => item?.Producto?.nom_produc}
      renderInput={(params) => (
        <TextField {...params} label="Busca un producto" variant="outlined" />
      )}
    />
  );
};
