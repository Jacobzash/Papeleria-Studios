import React, { useContext, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { InputSearchProducto } from "../../components/Admin/Productos/InputSearchProducto";
import { TableProductos } from "../../components/Admin/Productos/TableProductos";

import { AdminContext } from "../../context/AdminContext";
import { Loading } from "../../components/Others/Loading";
import { getProductsApi } from "../../api/product";

export const Productos = () => {
  const { products, setProducts } = useContext(AdminContext);
  useEffect(() => {
    const getProductos = async () => {
      const response = await getProductsApi();
      if (response.ok) {
        setProducts(response.products);
      }
    };
    getProductos();
  }, [setProducts]);
  return (
    <>
      <Typography variant="h3" color="primary" align="center">
        Módulo de Productos
      </Typography>
      <Container component="div" maxWidth="lg">
        {!products ? (
          <Loading variantMessage="h5" message="Cargando productos..." />
        ) : (
          <>
            <InputSearchProducto />
            <TableProductos />
          </>
        )}
      </Container>
    </>
  );
};
