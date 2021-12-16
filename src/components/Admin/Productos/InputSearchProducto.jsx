import React, { useContext, useState } from "react";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import { AddProducto } from "./AddProducto";
import { AdminContext } from "../../../context/AdminContext";

export const InputSearchProducto = () => {
  const { products, setProducts } = useContext(AdminContext);
  const [local] = useState(products);
  const [input, setInput] = useState("");
  const handleChange = ({ target }) => {
    setInput(target.value);
    if (target.value === "") {
      setProducts(local);
    } else {
      setProducts(
        local.filter((product) =>
          product.nom_produc.toLowerCase().includes(target.value.toLowerCase())
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
            label="Buscar un producto..."
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
          <AddProducto />
        </Grid>
      </Grid>
    </form>
  );
};
