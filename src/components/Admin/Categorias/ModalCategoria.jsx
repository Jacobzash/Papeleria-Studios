import React, { useContext, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { FormCategoria } from "./FormCategoria";
import { AdminContext } from "../../../context/AdminContext";
import { useForm } from "react-hook-form";
import { createCategoryApi, updateCategoryApi } from "../../../api/category";
import Swal from "sweetalert2";

const useStyles = makeStyles((theme) => ({
  headerDialog: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
}));
export const ModalCategoria = ({ open, setOpen, mode, data }) => {
  const [dataCategoria, setDataCategoria] = useState(data);
  const { categories, setCategories } = useContext(AdminContext);
  const { register, handleSubmit, errors } = useForm();

  const classes = useStyles();
  const handleClose = () => {
    setOpen(false);
  };
  const onSubmit = async (data, e) => {
    e.preventDefault();
    if (mode === "edit") {
      dataCategoria.nom_cat = data.nombre;
      dataCategoria.des_cat = data.descripcion;
      console.log(dataCategoria);
      const result = await updateCategoryApi(dataCategoria);
      if (result.ok) {
        handleClose();
        setCategories(
          categories.map((cat) => {
            if (cat.id === result.category.id) {
              return result.category;
            }
            return cat;
          })
        );
        Swal.fire(result.msg, "", "success");
      }
    } else {
      const result = await createCategoryApi(dataCategoria);
      if (result.ok) {
        handleClose();
        const category = result.category;
        setCategories([category, ...categories]);
        Swal.fire(result.msg, "", "success");
      }
    }
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
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogContent dividers>
            <FormCategoria
              dataCategoria={dataCategoria}
              setDataCategoria={setDataCategoria}
              mode={mode}
              register={register}
              errors={errors}
            />
          </DialogContent>
          <DialogActions className={classes.actions}>
            <Button autoFocus type="submit" variant="contained" color="primary">
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
        </form>
      </Dialog>
    </div>
  );
};
