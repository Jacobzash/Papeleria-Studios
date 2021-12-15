import Typography from "@material-ui/core/Typography";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  white: {
    color: "#FFF",
  },
}));

export const InfoFooter = () => {
  const classes = useStyles();
  return (
    <>
      <Typography variant="h5" className={classes.white}>
        Papelería Studios
      </Typography>
      <Typography variant="body2" className={classes.white}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
        architecto unde totam non, rerum, accusamus, eos fuga repudiandae ea
        aspernatur quo doloribus amet minima exercitationem quam atque
        praesentium tempore quos!
      </Typography>
    </>
  );
};
