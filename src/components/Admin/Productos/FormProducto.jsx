import React from "react";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import Grid from "@material-ui/core/Grid";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { AddCategoria } from "../Categorias/AddCategoria";
import { AddProveedor } from "../Proveedores/AddProveedor";

export const FormProducto = ({
  dataProducto,
  setDataProducto,
  handleSubmit,
  data,
  mode,
}) => {
  const handleChange = ({ target }) => {
    setDataProducto({
      ...dataProducto,
      [target.name]: target.value,
    });
  };
  const matches = useMediaQuery("(min-width:600px)");

  return (
    <form onSubmit={handleSubmit}>
      <Grid container direction="column">
        <Grid item xs={12}>
          <TextField
            autoFocus
            color="secondary"
            fullWidth
            label="Nombre"
            margin="normal"
            onChange={handleChange}
            defaultValue={mode === "edit" ? dataProducto.nombre : ""}
            name="nombre"
            required
            variant="outlined"
          />
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
                labelId="select-categoria"
                id="select-categoria"
                name="categoria"
                label="Categoria"
                value={mode === "edit" ? dataProducto.categoria : ""}
                onChange={handleChange}
              >
                <MenuItem value="">
                  <em>Seleccione una categoria</em>
                </MenuItem>
                <MenuItem value="Lapices">Lapices</MenuItem>
                <MenuItem value="Borradores">Borradores</MenuItem>
                <MenuItem value="Correctores">Correctores</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={2}>
            <AddCategoria mode="icon" />
          </Grid>
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
                labelId="select-proveedor"
                id="select-proveedor"
                name="proveedor"
                label="Proveedor"
                value={mode === "edit" ? dataProducto.proveedor : ""}
                onChange={handleChange}
              >
                <MenuItem value="">
                  <em>Seleccione una categoria</em>
                </MenuItem>
                <MenuItem value="Norma">Norma</MenuItem>
                <MenuItem value="Tulip">Tulip</MenuItem>
                <MenuItem value="Astro">Astro</MenuItem>
                <MenuItem value="Deno">Deno</MenuItem>
                <MenuItem value="Hello">Hello</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={2}>
            <AddProveedor mode="icon" />
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <TextField
            color="secondary"
            fullWidth
            label="Precio"
            margin="normal"
            onChange={handleChange}
            defaultValue={mode === "edit" ? dataProducto.precio : ""}
            name="precio"
            type="number"
            required
            variant="outlined"
          />
        </Grid>
      </Grid>
    </form>
  );
};
