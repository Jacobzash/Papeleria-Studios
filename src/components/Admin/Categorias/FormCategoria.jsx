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
        name="nom_cat"
        variant="outlined"
        inputRef={register({
          required: {
            value: true,
            message: "El nombre de la categoría es requerido",
          },
        })}
      />
      <Typography variant="body1" display="block" color="error" gutterBottom>
        {errors?.nom_cat?.message}
      </Typography>
      <TextField
        color="secondary"
        fullWidth
        label="Descripción"
        multiline
        margin="normal"
        onChange={handleChange}
        defaultValue={mode === "edit" ? dataCategoria.des_cat : ""}
        name="des_cat"
        variant="outlined"
        inputRef={register({
          required: {
            value: true,
            message: "La descripción de la categoría es requerida",
          },
        })}
      />
      <Typography variant="body1" display="block" color="error" gutterBottom>
        {errors?.des_cat?.message}
      </Typography>
    </>
  );
};
