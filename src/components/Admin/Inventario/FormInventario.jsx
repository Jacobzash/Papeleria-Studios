import React, { useContext } from "react";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Typography from "@material-ui/core/Typography";
import Select from "@material-ui/core/Select";
import Grid from "@material-ui/core/Grid";
import { AdminContext } from "../../../context/AdminContext";

export const FormInventario = ({
  dataInventario,
  setDataInventario,
  register,
  errors,
  mode,
}) => {
  const { products } = useContext(AdminContext);

  const handleChange = ({ target }) => {
    setDataInventario({
      ...dataInventario,
      [target.name]: target.value,
    });
  };

  return (
    <Grid container direction="column">
      <Grid item xs={12}>
        <FormControl fullWidth variant="outlined" margin="normal">
          <InputLabel id="select-producto">Producto</InputLabel>
          <Select
            native
            labelId="select-producto"
            id="select-producto"
            name="id_producto"
            label="Producto"
            defaultValue={mode === "edit" ? dataInventario?.Producto?.id : ""}
            onChange={handleChange}
            inputRef={register({
              required: {
                value: true,
                message: "El producto es requerido",
              },
            })}
          >
            <option aria-label="none" value="" />
            {products.map((product) => {
              return (
                <option key={product.id} value={product.id}>
                  {product.nom_produc}
                </option>
              );
            })}
          </Select>
        </FormControl>
        <Typography variant="body1" display="block" color="error" gutterBottom>
          {errors?.id_producto?.message}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <TextField
          autoFocus
          color="secondary"
          fullWidth
          label="Cantidad de disponible"
          margin="normal"
          onChange={handleChange}
          defaultValue={mode === "edit" ? dataInventario.can_total : ""}
          name="can_total"
          type="number"
          variant="outlined"
          inputRef={register({
            required: {
              value: true,
              message: "La cantidad disponible del producto es requerida",
            },
            min: {
              value: 1,
              message: "La cantidad disponible del producto debe ser mayor a 0",
            },
          })}
        />
        <Typography variant="body1" display="block" color="error" gutterBottom>
          {errors?.can_total?.message}
        </Typography>
      </Grid>
    </Grid>
  );
};
