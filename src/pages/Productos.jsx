import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { getProductsForUserApi } from "../api/product";
import { ListProductos } from "../components/Web/Productos/ListProductos";

export const Productos = () => {
  const [categorias, setCategorias] = useState();
  useEffect(() => {
    const getData = async () => {
      const response = await getProductsForUserApi();
      setCategorias(
        response.data.filter((categoria) => categoria.Productos.length > 0)
      );
      console.log(response);
    };
    getData();
  }, []);
  return (
    <Grid container>
      <Grid item xs={false} sm={1} md={1}></Grid>
      <Grid item xs={12} sm={10} md={10}>
        <Typography variant="h2" color="initial" align="center">
          Listado de productos
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" paragraph>
          Aquí encontrará el listado de productos que ofrece la papelería
        </Typography>
        {!!categorias && <ListProductos categorias={categorias} />}
      </Grid>
      <Grid item xs={false} sm={1} md={10}></Grid>
    </Grid>
  );
};
