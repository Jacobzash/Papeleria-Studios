import React, { useEffect, useState } from "react";
import { getProductsMostSelledApi } from "../../api/statistics";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles } from "@material-ui/core/styles";
import { Loading } from "../Others/Loading";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(2),
  },
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

export const ProductsMostSelled = () => {
  const classes = useStyles();
  const [products, setProducts] = useState();
  useEffect(() => {
    const getData = async () => {
      const response2 = await getProductsMostSelledApi();
      setProducts(response2.data);
      console.log(response2.data);
    };
    getData();
  }, []);
  return (
    <>
      <Typography
        variant="h3"
        color="initial"
        align="center"
        className={classes.container}
        gutterBottom
      >
        ¡Nuestros productos más vendidos!
      </Typography>
      <Grid container justifyContent="center" spacing={2}>
        {!products ? (
          <Loading />
        ) : products.length === 0 ? (
          <></>
        ) : (
          products.map((item, i) => {
            return (
              <Grid item key={i}>
                <Card raised={true} className={classes.root}>
                  <CardMedia
                    className={classes.media}
                    image={item.Inventario.Producto.url_image}
                    title={item.Inventario.Producto.nom_produc}
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h6"
                      component="h2"
                      color="primary"
                    >
                      {item.Inventario.Producto.nom_produc}
                    </Typography>
                    <Typography variant="body2" color="initial" component="p">
                      {`Precio: $${item.Inventario.Producto.valor_unitario}`}
                    </Typography>
                    <Typography variant="body2" color="initial" component="p">
                      {`Marca: ${item.Inventario.Producto.Proveedor.nom_prov}`}
                    </Typography>
                  </CardContent>

                  <CardActions>
                    <a
                      className={classes.buttonLink}
                      rel="noreferrer"
                      target="_blank"
                      href={`https://api.whatsapp.com/send?phone=573222709290&text=Me gustaría comprar el producto "${item.Inventario.Producto.nom_produc}"`}
                    >
                      Preguntar por este Producto
                    </a>
                  </CardActions>
                </Card>
              </Grid>
            );
          })
        )}
      </Grid>
    </>
  );
};
