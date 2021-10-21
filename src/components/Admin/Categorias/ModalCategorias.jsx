import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { FormCategoria } from "./FormCategoria";

const useStyles = makeStyles((theme) => ({
  headerDialog: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  [theme.breakpoints.down("xs")]: {
    actions: {},
  },
}));
export const ModalCategorias = ({ open, setOpen, mode, data }) => {
  const [dataCategoria, setDataCategoria] = useState(data);
  const classes = useStyles();
  const handleClose = () => {
    setOpen(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(dataCategoria);
    handleClose();
  };
  return (
    <div>
      <Dialog
        onClose={handleClose}
        aria-labelledby="Modal de Categorías"
        open={open}
        scroll="paper"
      >
        <div className={classes.headerDialog}>
          <DialogTitle id="Categoría" onClose={handleClose}>
            {mode === "edit"
              ? `Editando la categoria ${data.nombre}`
              : "Crear una categoría"}
          </DialogTitle>
          <IconButton aria-label="Cerrar modal" onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </div>
        <DialogContent dividers>
          <FormCategoria
            dataCategoria={dataCategoria}
            setDataCategoria={setDataCategoria}
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
            Guardar categoría
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
