import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  white: {
    color: "#FFF",
  },
}));

export const UbicacionFooter = () => {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography variant="h5" className={classes.white}>
          Ubicación
        </Typography>
        <Typography variant="body2" className={classes.white}>
          Cra. 9 #2c-164 a 2c-208, El Espinal, Tolima
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.349424024445!2d-74.87657138523964!3d4.1515141969816085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3ed378806574a3%3A0x40768b28d194ab7c!2sPapeler%C3%ADa%20Studios!5e0!3m2!1ses-419!2sco!4v1639540255032!5m2!1ses-419!2sco"
          width="250"
          height="150"
          title="ubicacion"
          style={{ border: 0 }}
          loading="lazy"
        ></iframe>
      </Grid>
    </Grid>
  );
};
