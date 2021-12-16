import React, { useContext, useEffect, useState } from "react";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import { AddInventario } from "./AddInventario";
import { AdminContext } from "../../../context/AdminContext";

export const InputSearchInventario = () => {
  const { inventory, setInventory, tmp, setTmp } = useContext(AdminContext);
  const [input, setInput] = useState("");

  useEffect(() => {
    setTmp(inventory);
    // eslint-disable-next-line
  }, []);

  const handleChange = ({ target }) => {
    setInput(target.value);
    if (target.value === "") {
      setInventory(tmp);
    } else {
      setInventory(
        tmp.filter((inv) =>
          inv.Producto.nom_produc
            .toLowerCase()
            .includes(target.value.toLowerCase())
        )
      );
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={2}
      >
        <Grid item xs={12} sm={9}>
          <TextField
            color="primary"
            label="Buscar un inventario..."
            margin="normal"
            name="search"
            onChange={handleChange}
            value={input}
            fullWidth
            variant="outlined"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton aria-label="search" edge="end">
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <AddInventario />
        </Grid>
      </Grid>
    </form>
  );
};
