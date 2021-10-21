import React from "react";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";

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
  return (
    <form onSubmit={handleSubmit}>
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
      <TextField
        color="secondary"
        fullWidth
        label="Proveedor"
        margin="normal"
        onChange={handleChange}
        defaultValue={mode === "edit" ? dataProducto.proveedor : ""}
        name="proveedor"
        required
        variant="outlined"
      />
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
    </form>
  );
};
