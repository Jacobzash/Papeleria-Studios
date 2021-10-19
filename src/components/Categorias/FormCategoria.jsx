import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";

export const FormCategoria = ({ handleSubmit, data, mode }) => {
  const [dataCategoria] = useState(data);

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        autoFocus
        color="secondary"
        fullWidth
        label="Nombre"
        margin="normal"
        value={mode === "edit" ? dataCategoria.nombre : ""}
        name="nombre"
        required
        variant="outlined"
      />
      <TextField
        autoComplete="user"
        autoFocus
        color="secondary"
        fullWidth
        label="Descripción"
        multiline
        margin="normal"
        value={mode === "edit" ? dataCategoria.descripcion : ""}
        name="descripcion"
        required
        variant="outlined"
      />
    </form>
  );
};
