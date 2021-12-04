import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Typography from "@material-ui/core/Typography";
import Select from "@material-ui/core/Select";
import Grid from "@material-ui/core/Grid";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { AddCategoria } from "../Categorias/AddCategoria";
import { AddProveedor } from "../Proveedores/AddProveedor";
import { AdminContext } from "../../../context/AdminContext";

const useStyles = makeStyles((theme) => ({
  displayNone: {
    display: "none",
  },
}));

export const FormProducto = ({
  dataProducto,
  setDataProducto,
  register,
  errors,
  mode,
}) => {
  const classes = useStyles();
  const { providers, categories } = useContext(AdminContext);

  const handleChange = ({ target }) => {
    setDataProducto({
      ...dataProducto,
      [target.name]: target.value,
    });
  };
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    console.log(e.target);
    if (file) {
      setDataProducto({
        ...dataProducto,
        [e.target.name]: file,
      });
      console.log(file);
    }
  };

  const matches = useMediaQuery("(min-width:600px)");

  return (
    <Grid container direction="column">
      <Grid item xs={12}>
        <TextField
          autoFocus
          color="secondary"
          fullWidth
          label="Nombre"
          margin="normal"
          onChange={handleChange}
          defaultValue={mode === "edit" ? dataProducto.nom_produc : ""}
          name="nom_produc"
          variant="outlined"
          inputRef={register({
            required: {
              value: true,
              message: "El nombre del producto es requerido",
            },
          })}
        />
        <Typography variant="body1" display="block" color="error" gutterBottom>
          {errors?.nom_produc?.message}
        </Typography>
      </Grid>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={matches ? 1 : 0}
      >
        <Grid item xs={12} sm={10}>
          <FormControl fullWidth variant="outlined" margin="normal">
            <InputLabel id="select-categoria">Categoria</InputLabel>
            <Select
              native
              labelId="select-categoria"
              id="select-categoria"
              name="id_categoria"
              label="Categoria"
              defaultValue={mode === "edit" ? dataProducto?.Categoria?.id : ""}
              onChange={handleChange}
              inputRef={register({
                required: {
                  value: true,
                  message: "La categoría es requerida",
                },
              })}
            >
              <option aria-label="none" value="" />
              {categories.map((category) => {
                return (
                  <option key={category.id} value={category.id}>
                    {category.nom_cat}
                  </option>
                );
              })}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={2}>
          <AddCategoria mode="icon" />
        </Grid>
        <Typography variant="body1" display="block" color="error" gutterBottom>
          {errors?.id_categoria?.message}
        </Typography>
      </Grid>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={matches ? 1 : 0}
      >
        <Grid item xs={12} sm={10}>
          <FormControl fullWidth variant="outlined" margin="normal">
            <InputLabel id="select-proveedor">Proveedor</InputLabel>
            <Select
              native
              labelId="select-proveedor"
              id="select-proveedor"
              name="id_proveedor"
              label="Proveedor"
              defaultValue={mode === "edit" ? dataProducto?.Proveedor?.id : ""}
              onChange={handleChange}
              inputRef={register({
                required: {
                  value: true,
                  message: "El proveedor es requerido",
                },
              })}
            >
              <option aria-label="none" value="" />
              {providers.map((provider) => {
                return (
                  <option key={provider.id} value={provider.id}>
                    {provider.nom_prov}
                  </option>
                );
              })}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={2}>
          <AddProveedor mode="icon" />
        </Grid>
        <Typography variant="body1" display="block" color="error" gutterBottom>
          {errors?.id_proveedor?.message}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <TextField
          color="secondary"
          fullWidth
          label="Precio"
          margin="normal"
          onChange={handleChange}
          defaultValue={mode === "edit" ? dataProducto.valor_unitario : ""}
          name="valor_unitario"
          type="number"
          variant="outlined"
          inputRef={register({
            required: {
              value: true,
              message: "El precio del producto es requerido",
            },
          })}
        />
        <Typography variant="body1" display="block" color="error" gutterBottom>
          {errors?.valor_unitario?.message}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <input
          accept="image/*"
          className={classes.displayNone}
          id="contained-button-file"
          name="url_image"
          onChange={handleFileChange}
          type="file"
          ref={register({
            required: {
              value: true,
              message: "La imagen del producto es requerida",
            },
          })}
        />

        <label htmlFor="contained-button-file">
          <Button
            variant="contained"
            fullWidth
            color="primary"
            component="span"
          >
            Subir Imagen
          </Button>
        </label>
        <Typography variant="body1" display="block" color="error" gutterBottom>
          {errors?.url_image?.message}
        </Typography>
        {dataProducto?.url_image?.name && (
          <Typography variant="body1" display="block" gutterBottom>
            {dataProducto.url_image.name}
          </Typography>
        )}
        {dataProducto?.url_image && !dataProducto.url_image.name && (
          <img
            src={dataProducto.url_image}
            alt="preview"
            style={{ maxWidth: "100%" }}
          />
        )}
      </Grid>
    </Grid>
  );
};
