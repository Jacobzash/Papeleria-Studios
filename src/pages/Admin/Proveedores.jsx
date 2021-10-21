import React from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { TableCategorias } from "../../components/Admin/Categorias/TableCategorias";
import { InputSearchProveedor } from "../../components/Admin/Proveedores/InputSearchProveedor";

export const Proveedores = () => {
  return (
    <>
      <Typography variant="h3" color="primary" align="center">
        Módulo de Proveedores
      </Typography>
      <Container component="div" maxWidth="lg">
        <InputSearchProveedor />
        <TableCategorias />
      </Container>
    </>
  );
};
