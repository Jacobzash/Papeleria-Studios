import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { ButtonEditProducto } from "./ButtonEditProducto";
import { ButtonDeleteProducto } from "./ButtonDeleteProducto";

import { AdminContext } from "../../../context/AdminContext";

const useStyles = makeStyles((theme) => ({
  tableContainer: {
    maxHeight: 400,
    marginTop: theme.spacing(2),
  },
  table: {
    minWidth: 650,
  },
  tableHead: {
    backgroundColor: "#000",
    color: "#FFF",
  },
  tableRow: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}));

export const TableProductos = () => {
  const classes = useStyles();
  const { products } = useContext(AdminContext);
  return (
    <TableContainer className={classes.tableContainer} component={Paper}>
      <Table
        stickyHeader
        size="small"
        className={classes.table}
        aria-label="Tabla de Productos"
      >
        <TableHead>
          <TableRow>
            <TableCell className={classes.tableHead}>ID Producto</TableCell>
            <TableCell className={classes.tableHead} align="left">
              Nombre
            </TableCell>
            <TableCell className={classes.tableHead} align="left">
              Categoria
            </TableCell>
            <TableCell className={classes.tableHead} align="left">
              Proveedor
            </TableCell>
            <TableCell className={classes.tableHead} align="left">
              Precio
            </TableCell>
            <TableCell className={classes.tableHead} align="left">
              Editar
            </TableCell>
            <TableCell className={classes.tableHead} align="left">
              Eliminar
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product) => (
            <TableRow className={classes.tableRow} key={product.id}>
              <TableCell component="th" scope="row">
                {product.id}
              </TableCell>
              <TableCell align="left">{product.nom_produc}</TableCell>
              <TableCell align="left">{product.Categoria.nom_cat}</TableCell>
              <TableCell align="left">{product.Proveedor.nom_prov}</TableCell>
              <TableCell align="left">{"$" + product.valor_unitario}</TableCell>
              <TableCell align="left">
                <ButtonEditProducto data={product} />
              </TableCell>
              <TableCell align="left">
                <ButtonDeleteProducto data={product} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
