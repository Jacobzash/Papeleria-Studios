import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { BarStatistics } from "./BarStatistics";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { NoData } from "./NoData";

const useStyles = makeStyles((theme) => ({
  heightItems: {
    height: 350,
    marginBottom: theme.spacing(7),
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));
export const EstadisticasProductos = ({ data }) => {
  const classes = useStyles();
  const {
    PMostSelled,
    PLessSelled,
    PMostSalesRecords,
    PLessSalesRecords,
    PHighestQuantitySold,
    PLessQuantitySold,
  } = data;
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography className={classes.heading}>
          Estadisticas de Productos
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Grid container justifyContent="center" alignItems="center">
          {PMostSelled.length === 0 ? (
            <NoData />
          ) : (
            <>
              <Grid item xs={12} md={6} lg={4} className={classes.heightItems}>
                <Typography variant="h6" gutterBottom align="center">
                  Productos más vendidos
                </Typography>
                <BarStatistics
                  data={PMostSelled}
                  dataXAxis="Inventario.Producto.nom_produc"
                  dataBar="valor_total"
                  maxDomain={PMostSelled[0]?.valor_total}
                />
              </Grid>
              <Grid item xs={12} md={6} lg={4} className={classes.heightItems}>
                <Typography variant="h6" gutterBottom align="center">
                  Productos menos vendidos
                </Typography>
                <BarStatistics
                  data={PLessSelled}
                  dataXAxis="Inventario.Producto.nom_produc"
                  dataBar="valor_total"
                  maxDomain={PLessSelled[PLessSelled.length - 1]?.valor_total}
                />
              </Grid>
              <Grid item xs={12} md={6} lg={4} className={classes.heightItems}>
                <Typography variant="h6" gutterBottom align="center">
                  Productos con más registros de ventas
                </Typography>
                <BarStatistics
                  data={PMostSalesRecords}
                  dataXAxis="Inventario.Producto.nom_produc"
                  dataBar="registros_venta"
                  maxDomain={PMostSalesRecords[0]?.registros_venta}
                />
              </Grid>
              <Grid item xs={12} md={6} lg={4} className={classes.heightItems}>
                <Typography variant="h6" gutterBottom align="center">
                  Productos con menos registros de ventas
                </Typography>
                <BarStatistics
                  data={PLessSalesRecords}
                  dataXAxis="Inventario.Producto.nom_produc"
                  dataBar="registros_venta"
                  maxDomain={
                    PLessSalesRecords[PLessSalesRecords.length - 1]
                      ?.registros_venta
                  }
                />
              </Grid>
              <Grid item xs={12} md={6} lg={4} className={classes.heightItems}>
                <Typography variant="h6" gutterBottom align="center">
                  Productos con más cantidad vendida
                </Typography>
                <BarStatistics
                  data={PHighestQuantitySold}
                  dataXAxis="Inventario.Producto.nom_produc"
                  dataBar="cantidad_productos"
                  maxDomain={PHighestQuantitySold[0]?.cantidad_productos}
                />
              </Grid>
              <Grid item xs={12} md={6} lg={4} className={classes.heightItems}>
                <Typography variant="h6" gutterBottom align="center">
                  Productos con menos cantidad vendida
                </Typography>
                <BarStatistics
                  data={PLessQuantitySold}
                  dataXAxis="Inventario.Producto.nom_produc"
                  dataBar="cantidad_productos"
                  maxDomain={
                    PLessQuantitySold[PLessQuantitySold.length - 1]
                      ?.cantidad_productos
                  }
                />
              </Grid>
            </>
          )}
        </Grid>
      </AccordionDetails>
    </Accordion>
  );
};
