import React from "react";
import IconButton from "@material-ui/core/IconButton";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

export const ButtonDeleteProducto = () => {
  return (
    <IconButton color="secondary">
      <DeleteForeverIcon />
    </IconButton>
  );
};
