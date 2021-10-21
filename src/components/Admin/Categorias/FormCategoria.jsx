import React from "react";
import TextField from "@material-ui/core/TextField";

export const FormCategoria = ({
  dataCategoria,
  setDataCategoria,
  handleSubmit,
  data,
  mode,
}) => {
  const handleChange = ({ target }) => {
    setDataCategoria({
      ...dataCategoria,
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
        defaultValue={mode === "edit" ? dataCategoria.nombre : ""}
        name="nombre"
        required
        variant="outlined"
      />
      <TextField
        color="secondary"
        fullWidth
        label="Descripción"
        multiline
        margin="normal"
        onChange={handleChange}
        defaultValue={mode === "edit" ? dataCategoria.descripcion : ""}
        name="descripcion"
        required
        variant="outlined"
      />
    </form>
  );
};
