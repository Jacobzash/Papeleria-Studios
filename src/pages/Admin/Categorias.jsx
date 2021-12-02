import React, { useContext, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

import { InputSearchCategoria } from "../../components/Admin/Categorias/InputSearchCategoria";
import { TableCategorias } from "../../components/Admin/Categorias/TableCategorias";

import { CategoriesContext } from "../../context/CategoriesContext";
import { getCategoriesApi } from "../../api/category";
import { Loading } from "../../components/Others/Loading";

export const Categorias = () => {
  const { categories, setCategories } = useContext(CategoriesContext);

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
          <Loading variantMessage="h5" message="Cargando categorias..." />
        ) : (
          <>
            <InputSearchCategoria />
            <TableCategorias />
          </>
        )}
      </Container>
    </>
  );
};
