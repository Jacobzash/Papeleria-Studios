import React, { useContext, useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { FormProducto } from "./FormProducto";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { createProductApi, updateProductApi } from "../../../api/product";
import { AdminContext } from "../../../context/AdminContext";
import { getCategoriesApi } from "../../../api/category";
import { getProvidersApi } from "../../../api/provider";
import { Loading } from "../../Others/Loading";
import { Typography } from "@material-ui/core";

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

export const ModalProducto = ({ open, setOpen, mode, data }) => {
  const [dataProducto, setDataProducto] = useState(data);
  const { products, setProducts } = useContext(AdminContext);
  const { register, handleSubmit, errors, reset } = useForm();
  const [changeImage, setChangeImage] = useState(false);
  const classes = useStyles();

  const { setProviders, setCategories, categories } = useContext(AdminContext);

  useEffect(() => {
    const getDataSelects = async () => {
      const resultProviders = await getProvidersApi();
      const resultCategories = await getCategoriesApi();
      if (resultProviders.ok) {
        setProviders(resultProviders.providers);
      }
      if (resultCategories.ok) {
        setCategories(resultCategories.categories);
      }
    };
    getDataSelects();
  }, [setProviders, setCategories]);

  const handleClose = () => {
    setOpen(false);
  };

  const onSubmit = async (_, e) => {
    e.preventDefault();
    console.log(e);
    if (mode === "edit") {
      const result = await updateProductApi(dataProducto, changeImage);
      if (result.ok) {
        handleClose();
        setProducts(
          products.map((product) => {
            if (product.id === result.product.id) {
              setDataProducto(result.product);
              return result.product;
            }
            return product;
          })
        );
        Swal.fire(result.msg, "", "success");
      }
    } else {
      const result = await createProductApi(dataProducto);
      if (result.ok) {
        handleClose();
        const product = result.product;
        setProducts([product, ...products]);
        Swal.fire(result.msg, "", "success");
      }
    }
    reset();
  };
  return (
    <div>
      {!categories ? (
        <Loading />
      ) : (
        <Dialog
          onClose={handleClose}
          aria-labelledby="Modal de Productos"
          open={open}
          scroll="paper"
        >
          <div className={classes.dialog}>
            <div className={classes.headerDialog}>
              <div id="Producto" className={classes.containerTitle}>
                <Typography variant="h6" className={classes.titleProduct}>
                  {mode === "edit"
                    ? `Editando el producto ${data.nom_produc}`
                    : "Crear un producto"}
                </Typography>
              </div>
              <IconButton aria-label="Cerrar modal" onClick={handleClose}>
                <CloseIcon />
              </IconButton>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <DialogContent dividers>
                <FormProducto
                  dataProducto={dataProducto}
                  setDataProducto={setDataProducto}
                  setChangeImage={setChangeImage}
                  mode={mode}
                  register={register}
                  errors={errors}
                />
              </DialogContent>
              <DialogActions className={classes.actions}>
                <Button
                  autoFocus
                  type="submit"
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
            </form>
          </div>
        </Dialog>
      )}
    </div>
  );
};
