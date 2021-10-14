import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  sticky: {
    padding: theme.spacing(3, 2),
    marginTop: "auto",
  },
}));
export const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.sticky}>
      <Typography variant="h3" color="initial">
        Footer
      </Typography>
    </footer>
  );
};
