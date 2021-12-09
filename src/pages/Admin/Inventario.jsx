import React, { useContext, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

import { AdminContext } from "../../context/AdminContext";
import { Loading } from "../../components/Others/Loading";
import { EmptyInfo } from "../../components/Others/EmptyInfo";
import { getInventoryApi } from "../../api/inventory";
import { InputSearchInventario } from "../../components/Admin/Inventario/InputSearchInventario";
import { TableInventario } from "../../components/Admin/Inventario/TableInventario";
import { getProductsApi } from "../../api/product";

export const Inventario = () => {
  const { inventory, setInventory, setProducts } = useContext(AdminContext);
  useEffect(() => {
    const getData = async () => {
      const resultInventory = await getInventoryApi();
      const resultProducts = await getProductsApi();
      if (resultInventory.ok) {
        setInventory(resultInventory.inventory);
      }
      if (resultProducts.ok) {
        setProducts(resultProducts.products);
      }
    };
    getData();
  }, [setInventory, setProducts]);
  return (
    <>
      <Typography variant="h3" color="primary" align="center">
        Módulo de Productos
      </Typography>
      <Container component="div" maxWidth="lg">
        {!inventory ? (
          <Loading variantMessage="h5" message="Cargando inventario..." />
        ) : inventory.length > 0 ? (
          <>
            <InputSearchInventario />
            <TableInventario />
          </>
        ) : (
          <>
            <InputSearchInventario />
            <EmptyInfo
              title="No hay registros de inventario aún"
              variantMessage="h4"
            />
          </>
        )}
      </Container>
    </>
  );
};
