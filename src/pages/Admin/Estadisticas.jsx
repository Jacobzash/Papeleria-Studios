import React from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

export const Estadisticas = () => {
  return (
    <>
      <Typography variant="h3" color="primary" align="center">
        Modulo de Estadísticas
      </Typography>
      <Container component="div" maxWidth="lg">
        <Typography variant="h5" color="primary" align="center">
          Estadísticas
        </Typography>
      </Container>
    </>
  );
};
