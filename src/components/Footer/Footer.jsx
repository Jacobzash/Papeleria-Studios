import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { InfoFooter } from "./InfoFooter";
import { NavegacionFooter } from "./NavegacionFooter";
import { UbicacionFooter } from "./UbicacionFooter";

const useStyles = makeStyles((theme) => ({
  sticky: {
    padding: theme.spacing(3, 10),
    marginTop: "auto",
    background: theme.palette.primary.main,
  },
  white: {
    color: "#FFF",
  },
}));
export const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.sticky}>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="flex-start"
        spacing={4}
      >
        <Grid item xs={12} md={4}>
          <InfoFooter />
        </Grid>
        <Grid item xs={12} md={4}>
          <NavegacionFooter />
        </Grid>
        <Grid item xs={12} md={4}>
          <UbicacionFooter />
        </Grid>
      </Grid>
    </footer>
  );
};
