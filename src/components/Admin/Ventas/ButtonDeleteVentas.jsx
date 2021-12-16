import React from "react";
import IconButton from "@material-ui/core/IconButton";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

export const ButtonDeleteVentas = ({ data, setVentas, ventas }) => {
  const handleClick = async () => {
    setVentas(ventas.filter((venta) => venta.id !== data.id));
  };
  return (
    <IconButton color="secondary" onClick={handleClick}>
      <DeleteForeverIcon />
    </IconButton>
  );
};
