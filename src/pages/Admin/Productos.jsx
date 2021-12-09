import React, { useContext, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { InputSearchProducto } from "../../components/Admin/Productos/InputSearchProducto";
import { TableProductos } from "../../components/Admin/Productos/TableProductos";

import { AdminContext } from "../../context/AdminContext";
import { Loading } from "../../components/Others/Loading";
import { getProductsApi } from "../../api/product";
import { EmptyInfo } from "../../components/Others/EmptyInfo";
import { getProvidersApi } from "../../api/provider";
import { getCategoriesApi } from "../../api/category";

export const Productos = () => {
  const { products, setProducts, setProviders, setCategories } =
    useContext(AdminContext);

  useEffect(() => {
    const getData = async () => {
      const response = await getProductsApi();
      const resultProviders = await getProvidersApi();
      const resultCategories = await getCategoriesApi();
      if (response.ok) {
        setProducts(response.products);
      }
      if (resultProviders.ok) {
        setProviders(resultProviders.providers);
      }
      if (resultCategories.ok) {
        setCategories(resultCategories.categories);
      }
    };
    getData();
  }, [setProducts, setProviders, setCategories]);
  return (
    <>
      <Typography variant="h3" color="primary" align="center">
        Módulo de Productos
      </Typography>
      <Container component="div" maxWidth="lg">
        {!products ? (
          <Loading variantMessage="h5" message="Cargando productos..." />
        ) : products.length > 0 ? (
          <>
            <InputSearchProducto />
            <TableProductos />
          </>
        ) : (
          <>
            <InputSearchProducto />
            <EmptyInfo
              title="No hay registros de productos aún"
              variantMessage="h4"
            />
          </>
        )}
      </Container>
    </>
  );
};
