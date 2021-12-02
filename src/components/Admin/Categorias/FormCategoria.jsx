import React from "react";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

export const FormCategoria = ({
  dataCategoria,
  setDataCategoria,
  register,
  errors,
  mode,
}) => {
  const handleChange = ({ target }) => {
    setDataCategoria({
      ...dataCategoria,
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
        defaultValue={mode === "edit" ? dataCategoria.nom_cat : ""}
        name="nombre"
        variant="outlined"
        inputRef={register({
          required: {
            value: true,
            message: "El nombre de la categoría es requerido",
          },
        })}
      />
      <Typography variant="body1" display="block" color="error" gutterBottom>
        {errors?.nombre?.message}
      </Typography>
      <TextField
        color="secondary"
        fullWidth
        label="Descripción"
        multiline
        margin="normal"
        onChange={handleChange}
        defaultValue={mode === "edit" ? dataCategoria.des_cat : ""}
        name="descripcion"
        variant="outlined"
        inputRef={register({
          required: {
            value: true,
            message: "La descripción de la categoría es requerida",
          },
        })}
      />
      <Typography variant="body1" display="block" color="error" gutterBottom>
        {errors?.descripcion?.message}
      </Typography>
    </>
  );
};
