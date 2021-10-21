import React from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

import { InputSearchCategoria } from "../../components/Admin/Categorias/InputSearchCategoria";
import { TableCategorias } from "../../components/Admin/Categorias/TableCategorias";

export const Categorias = () => {
  return (
    <>
      <Typography variant="h3" color="primary" align="center">
        Módulo de Categorías
      </Typography>
      <Container component="div" maxWidth="lg">
        <InputSearchCategoria />
        <TableCategorias />
      </Container>
    </>
  );
};
