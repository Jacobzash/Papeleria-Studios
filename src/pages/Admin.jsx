import React from "react";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { Panel } from "../components/Admin/Panel";

export const Admin = () => {
  const matches = useMediaQuery("(min-width:400px)");
  return (
    <>
      <Typography
        variant={matches ? "h2" : "h3"}
        color="primary"
        align="center"
        gutterBottom
        component="h2"
        style={{ wordBreak: "break-word" }}
      >
        Panel de Administrador
      </Typography>
      <Panel />
    </>
  );
};
