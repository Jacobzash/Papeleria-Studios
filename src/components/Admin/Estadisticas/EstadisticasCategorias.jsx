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

export const EstadisticasCategorias = ({ data }) => {
  const classes = useStyles();
  const { CMoreProducts, CFewerProducts } = data;
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography className={classes.heading}>
          Estadisticas de Categorías
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Grid container justifyContent="center" alignItems="center">
          {CMoreProducts.length === 0 ? (
            <NoData />
          ) : (
            <>
              <Grid item xs={12} md={6} lg={4} className={classes.heightItems}>
                <Typography variant="h6" gutterBottom align="center">
                  Categorías con más productos
                </Typography>
                <BarStatistics
                  data={CMoreProducts}
                  dataXAxis="Categoria.nom_cat"
                  dataBar="cantidad_productos"
                  maxDomain={CMoreProducts[0]?.cantidad_productos}
                />
              </Grid>
              <Grid item xs={12} md={6} lg={4} className={classes.heightItems}>
                <Typography variant="h6" gutterBottom align="center">
                  Categorías con menos productos
                </Typography>
                <BarStatistics
                  data={CFewerProducts}
                  dataXAxis="Categoria.nom_cat"
                  dataBar="cantidad_productos"
                  maxDomain={
                    CFewerProducts[CFewerProducts.length - 1]
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
