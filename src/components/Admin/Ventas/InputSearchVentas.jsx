import React, { useState, useContext } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { AdminContext } from "../../../context/AdminContext";

export const InputSearchVentas = ({ ventas, setVentas }) => {
  const { inventory } = useContext(AdminContext);
  const [input, setInput] = useState(null);

  const handleChange = (e, newValue) => {
    setInput(newValue);
    if (newValue !== null) {
      setVentas([...ventas, { ...newValue, cantidad: 1 }]);
      setInput(null);
    }
  };
  return (
    <Autocomplete
      id="buscar-producto"
      options={inventory}
      onChange={handleChange}
      value={input}
      getOptionLabel={(item) => item?.Producto?.nom_produc}
      renderInput={(params) => (
        <TextField {...params} label="Busca un producto" variant="outlined" />
      )}
    />
  );
};
