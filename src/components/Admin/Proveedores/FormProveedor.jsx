import React from "react";
import TextField from "@material-ui/core/TextField";

export const FormProveedor = ({
  dataProveedor,
  setDataProveedor,
  handleSubmit,
  data,
  mode,
}) => {
  const handleChange = ({ target }) => {
    setDataProveedor({
      ...dataProveedor,
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
        defaultValue={mode === "edit" ? dataProveedor.nombre : ""}
        name="nombre"
        required
        variant="outlined"
      />
      <TextField
        color="secondary"
        fullWidth
        label="Contacto"
        multiline
        margin="normal"
        onChange={handleChange}
        defaultValue={mode === "edit" ? dataProveedor.contacto : ""}
        name="contacto"
        type="number"
        required
        variant="outlined"
      />
    </form>
  );
};
