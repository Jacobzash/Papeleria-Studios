import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { FormProducto } from "./FormProducto";

const useStyles = makeStyles((theme) => ({
  headerDialog: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
}));

export const ModalProducto = ({ open, setOpen, mode, data }) => {
  const [dataProducto, setDataProducto] = useState(data);
  const classes = useStyles();
  const handleClose = () => {
    setOpen(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(dataProducto);
    handleClose();
  };
  return (
    <div>
      <Dialog
        onClose={handleClose}
        aria-labelledby="Modal de Productos"
        open={open}
        scroll="paper"
      >
        <div className={classes.headerDialog}>
          <DialogTitle id="Producto" onClose={handleClose}>
            {mode === "edit"
              ? `Editando el producto ${data.nombre}`
              : "Crear un producto"}
          </DialogTitle>
          <IconButton aria-label="Cerrar modal" onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </div>
        <DialogContent dividers>
          <FormProducto
            dataProducto={dataProducto}
            setDataProducto={setDataProducto}
            handleSubmit={handleSubmit}
            data={data}
            mode={mode}
          />
        </DialogContent>
        <DialogActions className={classes.actions}>
          <Button
            autoFocus
            onClick={handleSubmit}
            variant="contained"
            color="primary"
          >
            Guardar producto
          </Button>
          <Button
            autoFocus
            onClick={handleClose}
            variant="contained"
            color="secondary"
          >
            Cancelar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
