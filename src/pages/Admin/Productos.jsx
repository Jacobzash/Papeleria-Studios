import React from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { InputSearchProducto } from "../../components/Admin/Productos/InputSearchProducto";
import { TableProductos } from "../../components/Admin/Productos/TableProductos";

export const Productos = () => {
  return (
    <>
      <Typography variant="h3" color="primary" align="center">
        Módulo de Productos
      </Typography>
      <Container component="div" maxWidth="lg">
        <InputSearchProducto />
        <TableProductos />
      </Container>
    </>
  );
};
