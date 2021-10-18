import React from "react";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import { AddCategoria } from "./AddCategoria";

export const InputSearch = () => {
  return (
    <form>
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
            label="Buscar..."
            margin="normal"
            name="search"
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
          <AddCategoria />
        </Grid>
      </Grid>
    </form>
  );
};
