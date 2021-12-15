import React from "react";
import Grid from "@material-ui/core/Grid";
import { CategoriaItem } from "./CategoriaItem";

export const ListProductos = ({ categorias }) => {
  return (
    <Grid container spacing={2}>
      {categorias.map((categoria, i) => {
        return (
          <Grid key={i} item xs={12}>
            <CategoriaItem categoria={categoria} />
          </Grid>
        );
      })}
    </Grid>
  );
};
