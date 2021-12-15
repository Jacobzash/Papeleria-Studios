import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import { FormEstadisticas } from "../../components/Admin/Estadisticas/FormEstadisticas";
import { ListEstadisticias } from "../../components/Admin/Estadisticas/ListEstadisticias";
import Container from "@material-ui/core/Container";

export const Estadisticas = () => {
  const [dates, setDates] = useState({
    startDate: new Date(),
    endDate: new Date(),
  });
  const [statistics, setStatistics] = useState(null);
  return (
    <>
      <Typography variant="h3" color="primary" align="center" gutterBottom>
        Modulo de Estadísticas
      </Typography>
      <Container style={{ maxWidth: 1600 }}>
        <Typography variant="h5" color="initial" align="center" gutterBottom>
          Seleccione el intervalo de fechas para generar las estadísticas
        </Typography>
        <FormEstadisticas
          dates={dates}
          setDates={setDates}
          setStatistics={setStatistics}
        />
        {!!statistics && (
          <ListEstadisticias
            statistics={statistics}
            setStatistics={setStatistics}
          />
        )}
      </Container>
    </>
  );
};
