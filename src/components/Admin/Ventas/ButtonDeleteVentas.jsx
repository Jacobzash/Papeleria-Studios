import React, { useContext } from "react";
import IconButton from "@material-ui/core/IconButton";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import { AdminContext } from "../../../context/AdminContext";

export const ButtonDeleteVentas = ({ data, setVentas, ventas }) => {
  const { inventory, setInventory } = useContext(AdminContext);
  const handleClick = async () => {
    console.log(data);
    data.setFlag(false);
    if (inventory[0].id !== data.id) {
      setInventory([...inventory, data]);
    }
    setVentas(ventas.filter((venta) => venta.id !== data.id));
  };
  return (
    <IconButton color="secondary" onClick={handleClick}>
      <DeleteForeverIcon />
    </IconButton>
  );
};
