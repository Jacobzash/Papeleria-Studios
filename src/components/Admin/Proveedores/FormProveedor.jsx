import React from "react";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

export const FormProveedor = ({
  dataProveedor,
  setDataProveedor,
  register,
  errors,
  mode,
}) => {
  const handleChange = ({ target }) => {
    setDataProveedor({
      ...dataProveedor,
      [target.name]: target.value,
    });
  };
  return (
    <>
      <TextField
        autoFocus
        color="secondary"
        fullWidth
        label="Nombre"
        margin="normal"
        onChange={handleChange}
        defaultValue={mode === "edit" ? dataProveedor.nom_prov : ""}
        name="nombre"
        variant="outlined"
        inputRef={register({
          required: {
            value: true,
            message: "El nombre del proveedor es requerido",
          },
        })}
      />
      <Typography variant="body1" display="block" color="error" gutterBottom>
        {errors?.nombre?.message}
      </Typography>
      <TextField
        color="secondary"
        fullWidth
        label="Contacto"
        margin="normal"
        onChange={handleChange}
        defaultValue={mode === "edit" ? dataProveedor.contacto_prov : ""}
        name="contacto"
        variant="outlined"
        inputRef={register({
          required: {
            value: true,
            message: "El contacto del proveedor es requerido",
          },
        })}
      />
      <Typography variant="body1" display="block" color="error" gutterBottom>
        {errors?.contacto?.message}
      </Typography>
    </>
  );
};
