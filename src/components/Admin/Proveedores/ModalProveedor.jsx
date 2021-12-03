import React, { useContext, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { FormProveedor } from "./FormProveedor";

import { useForm } from "react-hook-form";
import { createProviderApi, updateProviderApi } from "../../../api/provider";

import { AdminContext } from "../../../context/AdminContext";
import Swal from "sweetalert2";

const useStyles = makeStyles((theme) => ({
  headerDialog: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
}));

export const ModalProveedor = ({ open, setOpen, mode, data }) => {
  const { register, handleSubmit, errors } = useForm();
  const [dataProveedor, setDataProveedor] = useState(data);
  const { providers, setProviders } = useContext(AdminContext);

  const classes = useStyles();
  const handleClose = () => {
    setOpen(false);
  };
  const onSubmit = async (data, e) => {
    e.preventDefault();
    if (mode === "edit") {
      const result = await updateProviderApi(dataProveedor);
      if (result.ok) {
        handleClose();
        setProviders(
          providers.map((prov) => {
            if (prov.id === result.provider.id) {
              return result.provider;
            }
            return prov;
          })
        );
        Swal.fire(result.msg, "", "success");
      }
    } else {
      const result = await createProviderApi(dataProveedor);
      if (result.ok) {
        handleClose();
        const provider = result.provider;
        setProviders([provider, ...providers]);
        Swal.fire(result.msg, "", "success");
      }
    }
  };
  return (
    <div>
      <Dialog
        onClose={handleClose}
        aria-labelledby="Modal de Proveedores"
        open={open}
        scroll="paper"
      >
        <div className={classes.headerDialog}>
          <DialogTitle id="Proveedor" onClose={handleClose}>
            {mode === "edit"
              ? `Editando el proveedor ${data.nom_prov}`
              : "Crear un proveedor"}
          </DialogTitle>
          <IconButton aria-label="Cerrar modal" onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogContent dividers>
            <FormProveedor
              dataProveedor={dataProveedor}
              setDataProveedor={setDataProveedor}
              mode={mode}
              register={register}
              errors={errors}
            />
          </DialogContent>
          <DialogActions className={classes.actions}>
            <Button type="submit" autoFocus variant="contained" color="primary">
              Guardar proveedor
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
      </Dialog>
    </div>
  );
};
