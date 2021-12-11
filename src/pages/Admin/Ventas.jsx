import React, { useEffect, useContext, useState } from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { Loading } from "../../components/Others/Loading";
import { EmptyInfo } from "../../components/Others/EmptyInfo";
import { getInventoryWithStockApi } from "../../api/inventory";
import { AdminContext } from "../../context/AdminContext";
import { InputSearchVentas } from "../../components/Admin/Ventas/InputSearchVentas";
import { TableVentas } from "../../components/Admin/Ventas/TableVentas";

export const Ventas = () => {
  const { inventory, setInventory } = useContext(AdminContext);
  const [ventas, setVentas] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const resultInventory = await getInventoryWithStockApi();
      setInventory(resultInventory.inventory);
    };
    getData();
  }, [setInventory]);
  return (
    <div>
      <Typography variant="h3" color="primary" align="center">
        Modulo de Ventas
      </Typography>
      <Container component="div" maxWidth="lg">
        {!inventory ? (
          <Loading variantMessage="h5" message="Cargando inventario..." />
        ) : inventory.length > 0 ? (
          <>
            <InputSearchVentas ventas={ventas} setVentas={setVentas} />
            <TableVentas ventas={ventas} setVentas={setVentas} />
          </>
        ) : (
          <EmptyInfo
            title="No hay registros de inventario aún, por favor dirígase al módulo de inventario y cree los registros necesarios"
            variantMessage="h4"
          />
        )}
      </Container>
    </div>
  );
};
