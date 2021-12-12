import { Grid, Typography } from "@material-ui/core";
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  heightItems: {
    height: 350,
    marginBottom: theme.spacing(7),
  },
}));

export const ListEstadisticias = ({ statistics, setStatistics }) => {
  const classes = useStyles();
  const {
    PMostSelled,
    PMostSalesRecords,
    PHighestQuantitySold,
    CMoreProducts,
    PrMoreProducts,
    PLessSelled,
    PLessSalesRecords,
    PLessQuantitySold,
    CFewerProducts,
    PrFewerProducts,
  } = statistics;
  return (
    <Grid container>
      <Grid item xs={12} md={6} lg={4} className={classes.heightItems}>
        <Typography variant="h6" gutterBottom align="center">
          Productos más vendidos
        </Typography>
        <BarStatistics
          data={PMostSelled}
          dataXAxis="Inventario.Producto.nom_produc"
          dataBar="valor_total"
          maxDomain={PMostSelled[0].valor_total}
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
          maxDomain={PLessSelled[PLessSelled.length - 1].valor_total}
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
          maxDomain={PMostSalesRecords[0].registros_venta}
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
            PLessSalesRecords[PLessSalesRecords.length - 1].registros_venta
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
          maxDomain={PHighestQuantitySold[0].cantidad_productos}
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
            PLessQuantitySold[PLessQuantitySold.length - 1].cantidad_productos
          }
        />
      </Grid>
      <Grid item xs={12} md={6} lg={4} className={classes.heightItems}>
        <Typography variant="h6" gutterBottom align="center">
          Categorías con más productos
        </Typography>
        <BarStatistics
          data={CMoreProducts}
          dataXAxis="Categoria.nom_cat"
          dataBar="cantidad_productos"
          maxDomain={CMoreProducts[0].cantidad_productos}
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
            CFewerProducts[CFewerProducts.length - 1].cantidad_productos
          }
        />
      </Grid>
      <Grid item xs={12} md={6} lg={4} className={classes.heightItems}>
        <Typography variant="h6" gutterBottom align="center">
          Proveedores con más productos
        </Typography>
        <BarStatistics
          data={PrMoreProducts}
          dataXAxis="Proveedor.nom_prov"
          dataBar="cantidad_productos"
          maxDomain={PrMoreProducts[0].cantidad_productos}
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
            PrFewerProducts[PrFewerProducts.length - 1].cantidad_productos
          }
        />
      </Grid>
    </Grid>
  );
};

const BarStatistics = ({ data, dataXAxis, dataBar, maxDomain = "auto" }) => {
  return (
    <ResponsiveContainer>
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey={dataXAxis} />
        <YAxis allowDataOverflow={true} domain={[0, parseInt(maxDomain)]} />
        <Tooltip />
        <Legend />
        <Bar dataKey={dataBar} fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
};
