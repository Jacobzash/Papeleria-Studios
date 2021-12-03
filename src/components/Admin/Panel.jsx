import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import CategoryIcon from "@material-ui/icons/Category";
import CreateIcon from "@material-ui/icons/Create";
import PlaylistAddCheckIcon from "@material-ui/icons/PlaylistAddCheck";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import EqualizerIcon from "@material-ui/icons/Equalizer";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";

import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  sizeButtons: {
    fontSize: "28px !important",
  },
}));

export const Panel = () => {
  const classes = useStyles();
  const matches = useMediaQuery("(min-width:600px)");
  return (
    <Container maxWidth="md" disableGutters>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={matches ? 3 : 1}
      >
        <Grid item xs={12} sm={6} md={4}>
          <Link to="/admin/categorias">
            <Button
              variant="contained"
              color="secondary"
              fullWidth
              size="large"
              endIcon={<CategoryIcon className={classes.sizeButtons} />}
            >
              Módulo Categorías
            </Button>
          </Link>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Link to="/admin/proveedores">
            <Button
              variant="contained"
              fullWidth
              color="secondary"
              size="large"
              endIcon={<LocalShippingIcon className={classes.sizeButtons} />}
            >
              Módulo Proveedores
            </Button>
          </Link>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Link to="/admin/productos">
            <Button
              variant="contained"
              fullWidth
              color="secondary"
              size="large"
              endIcon={<CreateIcon className={classes.sizeButtons} />}
            >
              Módulo Productos
            </Button>
          </Link>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Link to="/admin/inventario">
            <Button
              variant="contained"
              fullWidth
              color="secondary"
              size="large"
              endIcon={<PlaylistAddCheckIcon className={classes.sizeButtons} />}
            >
              Módulo Inventario
            </Button>
          </Link>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Link to="/admin/ventas">
            <Button
              variant="contained"
              fullWidth
              color="secondary"
              size="large"
              endIcon={<AttachMoneyIcon className={classes.sizeButtons} />}
            >
              Módulo Ventas
            </Button>
          </Link>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Link to="/admin/estadisticas">
            <Button
              variant="contained"
              fullWidth
              color="secondary"
              size="large"
              endIcon={<EqualizerIcon className={classes.sizeButtons} />}
            >
              Módulo Estadísticas
            </Button>
          </Link>
        </Grid>
      </Grid>
    </Container>
  );
};
