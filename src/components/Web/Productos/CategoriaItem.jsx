import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import { ProductoItem } from "./ProductoItem";

export const CategoriaItem = ({ categoria }) => {
  const matches = useMediaQuery("(min-width:513px)");
  return (
    <>
      <Typography variant="h4" align="center" color="initial" gutterBottom>
        {categoria?.nom_cat}
      </Typography>
      <Grid
        container
        justifyContent={matches ? "flex-start" : "center"}
        spacing={2}
      >
        {categoria?.Productos.map((producto, i) => {
          return (
            <Grid key={i} item>
              <ProductoItem producto={producto} />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};
