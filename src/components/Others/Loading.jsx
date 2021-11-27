import React from "react";
import { Grid, Typography, CircularProgress } from "@material-ui/core/";

export const Loading = ({ variantMessage, message, size = 100 }) => {
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      {message && (
        <Typography
          variant={variantMessage}
          align="center"
          style={{ padding: 30 }}
        >
          {message}
        </Typography>
      )}
      <CircularProgress size={size} style={{ marginBottom: 50 }} />
    </Grid>
  );
};
