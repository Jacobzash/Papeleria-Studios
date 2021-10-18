import React from "react";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";

export const AddCategoria = () => {
  return (
    <Button 
    variant="contained" 
    color="primary" 
    fullWidth 
    endIcon={<AddIcon />}
    >
      Agregar
    </Button>
  );
};
