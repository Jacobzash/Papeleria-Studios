import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { FormEstadisticas } from "../../components/Admin/Estadisticas/FormEstadisticas";

export const Estadisticas = () => {
  const [dates, setDates] = useState({
    startDate: new Date(),
    endDate: new Date(),
  });
  return (
    <>
      <Typography variant="h3" color="primary" align="center" gutterBottom>
        Modulo de Estadísticas
      </Typography>
      <Container component="div" maxWidth="lg">
        <Typography variant="h5" color="initial" align="center" gutterBottom>
          Seleccione el intervalo de fechas para generar las estadísticas
        </Typography>
        <FormEstadisticas dates={dates} setDates={setDates} />
      </Container>
    </>
  );
};
