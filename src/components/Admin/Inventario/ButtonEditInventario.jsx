import React, { useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import { makeStyles } from "@material-ui/core/styles";
import { ModalInventario } from "./ModalInventario";

const useStyles = makeStyles({
  buttonEdit: {
    color: "#3DA939",
  },
});

export const ButtonEditInventario = ({ data }) => {
  const [open, setOpen] = useState(false);
  const openModal = () => {
    setOpen(true);
  };
  const classes = useStyles();
  return (
    <>
      <IconButton onClick={openModal} classes={{ label: classes.buttonEdit }}>
        <EditIcon />
      </IconButton>
      <ModalInventario mode="edit" data={data} open={open} setOpen={setOpen} />
    </>
  );
};
