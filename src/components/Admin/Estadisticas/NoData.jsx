import React from "react";
import WarningIcon from "@material-ui/icons/Warning";
import Typography from "@material-ui/core/Typography";

export const NoData = () => {
  return (
    <>
      <WarningIcon style={{ fontSize: "100px" }} />
      <Typography variant="body1" color="error">
        No se encontró información en este intervalo de fechas.
      </Typography>
    </>
  );
};
