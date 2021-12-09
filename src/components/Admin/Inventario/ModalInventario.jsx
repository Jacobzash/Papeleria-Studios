import React, { useContext, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const useStyles = makeStyles((theme) => ({
  dialog: {
    [theme.breakpoints.between(420, 600)]: {
      minWidth: 360,
    },
    [theme.breakpoints.up("sm")]: {
      minWidth: 550,
    },
  },
  headerDialog: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  containerTitle: {
    display: "flex",
  },
  titleProduct: {
    padding: theme.spacing(2, 3),
  },
}));

export const ModalInventario = ({ open, setOpen, mode, data }) => {
  const { register, handleSubmit, errors, reset } = useForm();
  const classes = useStyles();
  const handleClose = () => {
    setOpen(false);
  };
  const onSubmit = async (_, e) => {
    e.preventDefault();
  };
  return (
    <div>
      <Dialog
        onClose={handleClose}
        aria-labelledby="Modal de Inventario"
        open={open}
        scroll="paper"
      >
        <div className={classes.dialog}>
          <div className={classes.headerDialog}>
            <div id="Producto" className={classes.containerTitle}>
              <Typography variant="h6" className={classes.titleProduct}>
                {mode === "edit"
                  ? `Editando el inventario ${data.nom_produc}`
                  : "Crear un inventario"}
              </Typography>
            </div>
            <IconButton aria-label="Cerrar modal" onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <DialogContent dividers>
              {/* <FormProducto
                mode={mode}
                register={register}
                errors={errors}
              /> */}
            </DialogContent>
            <DialogActions className={classes.actions}>
              <Button
                autoFocus
                type="submit"
                variant="contained"
                color="primary"
              >
                Guardar inventario
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
          </form>
        </div>
      </Dialog>
    </div>
  );
};
