import React from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { InputSearchProveedor } from "../../components/Admin/Proveedores/InputSearchProveedor";
import { TableProveedores } from "../../components/Admin/Proveedores/TableProveedores";

export const Proveedores = () => {
  return (
    <>
      <Typography variant="h3" color="primary" align="center">
        Módulo de Proveedores
      </Typography>
      <Container component="div" maxWidth="lg">
        <InputSearchProveedor />
        <TableProveedores />
      </Container>
    </>
  );
};
