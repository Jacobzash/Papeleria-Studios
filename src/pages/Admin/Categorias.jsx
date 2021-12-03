import React, { useContext, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

import { InputSearchCategoria } from "../../components/Admin/Categorias/InputSearchCategoria";
import { TableCategorias } from "../../components/Admin/Categorias/TableCategorias";

import { AdminContext } from "../../context/AdminContext";
import { getCategoriesApi } from "../../api/category";
import { Loading } from "../../components/Others/Loading";
import { EmptyInfo } from "../../components/Others/EmptyInfo";

export const Categorias = () => {
  const { categories, setCategories } = useContext(AdminContext);

  useEffect(() => {
    const getCategorias = async () => {
      const response = await getCategoriesApi();
      if (response.ok) {
        setCategories(response.categories);
      }
    };
    getCategorias();
  }, [setCategories]);
  return (
    <>
      <Typography variant="h3" color="primary" align="center">
        Módulo de Categorías
      </Typography>
      <Container component="div" maxWidth="lg">
        {!categories ? (
          <Loading variantMessage="h4" message="Cargando categorias..." />
        ) : categories.length > 0 ? (
          <>
            <InputSearchCategoria />
            <TableCategorias />
          </>
        ) : (
          <>
            <InputSearchCategoria />
            <EmptyInfo
              title="No registros de categorías aún"
              variantMessage="h4"
            />
          </>
        )}
      </Container>
    </>
  );
};
