import Typography from "@material-ui/core/Typography";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import iconWp from "../../assets/iconwp.png";

const useStyles = makeStyles((theme) => ({
  white: {
    color: "#FFF",
  },
  img: {
    width: 48,
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
        Tu papelería de confianza, con variedad de productos y una atención
        personalizada. Si tiene alguna duda, puede contactarnos a través de
        Whatsapp.
      </Typography>
      <a rel="noreferrer" target="_blank" href="https://wa.link/hvzs6l">
        <img src={iconWp} alt="Ícono de whatsapp" className={classes.img} />
      </a>
    </>
  );
};
