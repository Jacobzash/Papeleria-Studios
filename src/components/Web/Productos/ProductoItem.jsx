import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 224,
    [theme.breakpoints.between("0", "513")]: {
      width: 280,
    },
    borderRadius: "10px",
  },
  media: {
    height: 200,
    backgroundSize: "contain",
  },
  buttonLink: {
    background: "#40C351",
    color: "#fff",
    width: "100%",
    padding: theme.spacing(1, 1),
    borderRadius: "20px",
    textAlign: "center",
  },
}));

export const ProductoItem = ({ producto }) => {
  const classes = useStyles();
  return (
    <Card raised={true} className={classes.root}>
      <CardMedia
        className={classes.media}
        image={producto.url_image}
        title={producto.nom_produc}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="h2" color="primary">
          {producto.nom_produc}
        </Typography>
        <Typography variant="body2" color="initial" component="p">
          {`Precio: $${producto.valor_unitario}`}
        </Typography>
        <Typography variant="body2" color="initial" component="p">
          {`Marca: ${producto.Proveedor.nom_prov}`}
        </Typography>
      </CardContent>

      <CardActions>
        <a
          className={classes.buttonLink}
          rel="noreferrer"
          target="_blank"
          href={`https://api.whatsapp.com/send?phone=573222709290&text=Me gustaría comprar el producto "${producto.nom_produc}"`}
        >
          Preguntar por este Producto
        </a>
      </CardActions>
    </Card>
  );
};
