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

export const EstadisticasProveedores = ({ data }) => {
  const classes = useStyles();
  const { PrMoreProducts, PrFewerProducts } = data;
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography className={classes.heading}>
          Estadisticas de Proveedores
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Grid container justifyContent="center" alignItems="center">
          {PrMoreProducts.length === 0 ? (
            <NoData />
          ) : (
            <>
              <Grid item xs={12} md={6} lg={4} className={classes.heightItems}>
                <Typography variant="h6" gutterBottom align="center">
                  Proveedores con más productos
                </Typography>
                <BarStatistics
                  data={PrMoreProducts}
                  dataXAxis="Proveedor.nom_prov"
                  dataBar="cantidad_productos"
                  maxDomain={PrMoreProducts[0]?.cantidad_productos}
                />
              </Grid>
              <Grid item xs={12} md={6} lg={4} className={classes.heightItems}>
                <Typography variant="h6" gutterBottom align="center">
                  Proveedores con menos productos
                </Typography>
                <BarStatistics
                  data={PrFewerProducts}
                  dataXAxis="Proveedor.nom_prov"
                  dataBar="cantidad_productos"
                  maxDomain={
                    PrFewerProducts[PrFewerProducts.length - 1]
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
