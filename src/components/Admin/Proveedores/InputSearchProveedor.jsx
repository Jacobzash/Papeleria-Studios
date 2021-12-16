import React, { useContext, useState } from "react";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import { AddProveedor } from "./AddProveedor";
import { AdminContext } from "../../../context/AdminContext";
import { useEffect } from "react";

export const InputSearchProveedor = () => {
  const { providers, setProviders, tmp, setTmp } = useContext(AdminContext);
  const [input, setInput] = useState("");

  useEffect(() => {
    setTmp(providers);
    // eslint-disable-next-line
  }, []);

  const handleChange = ({ target }) => {
    setInput(target.value);
    if (target.value === "") {
      setProviders(tmp);
    } else {
      setProviders(
        tmp.filter((provider) =>
          provider.nom_prov.toLowerCase().includes(target.value.toLowerCase())
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
            label="Buscar un proveedor..."
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
          <AddProveedor />
        </Grid>
      </Grid>
    </form>
  );
};
