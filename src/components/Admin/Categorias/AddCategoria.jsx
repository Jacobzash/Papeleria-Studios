import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import { ModalCategoria } from "./ModalCategoria";

export const AddCategoria = () => {
  const [open, setOpen] = useState(false);
  const openModal = () => {
    setOpen(true);
  };
  return (
    <>
      <Button
        variant="contained"
        color="primary"
        fullWidth
        endIcon={<AddIcon />}
        onClick={openModal}
      >
        Agregar
      </Button>
      <ModalCategoria open={open} setOpen={setOpen} />
    </>
  );
};
