import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

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

export const TableInventario = () => {
  const classes = useStyles();
  const { inventory } = useContext(AdminContext);
  return (
    <TableContainer className={classes.tableContainer} component={Paper}>
      <Table
        stickyHeader
        size="small"
        className={classes.table}
        aria-label="Tabla de Inventario"
      >
        <TableHead>
          <TableRow>
            <TableCell className={classes.tableHead}>ID Inventario</TableCell>
            <TableCell className={classes.tableHead} align="left">
              Producto
            </TableCell>
            <TableCell className={classes.tableHead} align="left">
              Cantidad
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
          {inventory.map((item) => (
            <TableRow className={classes.tableRow} key={item.id}>
              <TableCell component="th" scope="row">
                {item.id}
              </TableCell>
              <TableCell align="left">{item.Producto.nom_produc}</TableCell>
              <TableCell align="left">{item.can_total}</TableCell>
              <TableCell align="left">
                {/* <ButtonEditProducto data={item} /> */}
              </TableCell>
              <TableCell align="left">
                {/* <ButtonDeleteProducto data={item} /> */}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
