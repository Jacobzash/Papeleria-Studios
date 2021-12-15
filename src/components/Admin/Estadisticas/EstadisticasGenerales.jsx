import React from "react";
import Typography from "@material-ui/core/Typography";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import CategoryIcon from "@material-ui/icons/Category";
import CreateIcon from "@material-ui/icons/Create";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";
import FormatListNumberedIcon from "@material-ui/icons/FormatListNumbered";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  heightItems: {
    height: 350,
    marginBottom: theme.spacing(7),
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: theme.spacing(3, 0),
  },
  containerList: {
    maxWidth: 400,
  },
  containerStatistic: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));
export const EstadisticasGenerales = ({ data }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Typography variant="h4" component="h2" align="center" gutterBottom>
        Estadísticas de Generales del Sistema
      </Typography>
      <Grid container className={classes.containerList}>
        <Grid item xs={12} sm={6}>
          <div className={classes.containerStatistic}>
            <ListItemIcon>
              <CategoryIcon />
            </ListItemIcon>
            <ListItemText primary={`${data.totalCategories} Categorías`} />
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div className={classes.containerStatistic}>
            <ListItemIcon>
              <LocalShippingIcon />
            </ListItemIcon>
            <ListItemText primary={`${data.totalProviders} Proveedores`} />
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div className={classes.containerStatistic}>
            <ListItemIcon>
              <CreateIcon />
            </ListItemIcon>
            <ListItemText primary={`${data.totalProducts} Productos`} />
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div className={classes.containerStatistic}>
            <ListItemIcon>
              <AttachMoneyIcon />
            </ListItemIcon>
            <ListItemText primary={`${data.totalSales} Ventas`} />
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div className={classes.containerStatistic}>
            <ListItemIcon>
              <FormatListNumberedIcon />
            </ListItemIcon>
            <ListItemText primary={`${data.totalOrders} Pedidos`} />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};
