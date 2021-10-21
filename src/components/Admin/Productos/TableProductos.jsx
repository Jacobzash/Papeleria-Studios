import React from "react";
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

function createData(ID, nombre, categoria, proveedor, precio) {
  return { ID, nombre, categoria, proveedor, precio };
}
const rows = [
  createData(154, "Lapiz Norma", "Lapices", "Norma", 500),
  createData(149, "Corrector Astro", "Correctores", "Astro", 1500),
  createData(129, "Borrador de Nata", "Borradores", "Norma", 800),
  createData(139, "Lapicero Norma", "Lapices", "Norma", 900),
];
export const TableProductos = () => {
  const classes = useStyles();

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
          {rows.map((row) => (
            <TableRow className={classes.tableRow} key={row.ID}>
              <TableCell component="th" scope="row">
                {row.ID}
              </TableCell>
              <TableCell align="left">{row.nombre}</TableCell>
              <TableCell align="left">{row.categoria}</TableCell>
              <TableCell align="left">{row.proveedor}</TableCell>
              <TableCell align="left">{"$" + row.precio}</TableCell>
              <TableCell align="left">
                <ButtonEditProducto data={row} />
              </TableCell>
              <TableCell align="left">
                <ButtonDeleteProducto />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
