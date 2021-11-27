import React, { useContext, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { InputSearchProveedor } from "../../components/Admin/Proveedores/InputSearchProveedor";
import { TableProveedores } from "../../components/Admin/Proveedores/TableProveedores";
import { getProvidersApi } from "../../api/provider";
import { Loading } from "../../components/Others/Loading";

import { ProvidersContext } from "../../context/ProvidersContext";

export const Proveedores = () => {
  const { providers, setProviders } = useContext(ProvidersContext);
  useEffect(() => {
    const getProveedores = async () => {
      const response = await getProvidersApi();
      if (response.ok) {
        setProviders(response.providers);
      }
    };
    getProveedores();
  }, [setProviders]);

  return (
    <>
      <Typography variant="h3" color="primary" align="center">
        Módulo de Proveedores
      </Typography>
      <Container component="div" maxWidth="lg">
        {!providers ? (
          <Loading variantMessage="h5" message="Cargando proveedores..." />
        ) : (
          <>
            <InputSearchProveedor />
            <TableProveedores />
          </>
        )}
      </Container>
    </>
  );
};
