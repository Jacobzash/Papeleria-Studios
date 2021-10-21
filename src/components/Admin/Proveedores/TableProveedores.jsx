import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { ButtonEditProveedor } from "./ButtonEditProveedor";
import { ButtonDeleteProveedor } from "./ButtonDeleteProveedor";

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

function createData(ID, nombre, contacto) {
  return { ID, nombre, contacto };
}

const rows = [
  createData(159, "Norma", "3105834343"),
  createData(237, "Tulip", "3145454343"),
  createData(262, "Astro", "3215674354"),
  createData(305, "Deno", "3208764443"),
  createData(356, "Hello", "3117002312"),
];
export const TableProveedores = () => {
  const classes = useStyles();

  return (
    <TableContainer className={classes.tableContainer} component={Paper}>
      <Table
        stickyHeader
        size="small"
        className={classes.table}
        aria-label="Tabla de Proveedores"
      >
        <TableHead>
          <TableRow>
            <TableCell className={classes.tableHead}>ID proveedor</TableCell>
            <TableCell className={classes.tableHead} align="left">
              Nombre
            </TableCell>
            <TableCell className={classes.tableHead} align="left">
              Conctacto
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
              <TableCell align="left">{row.contacto}</TableCell>
              <TableCell align="left">
                <ButtonEditProveedor data={row} />
              </TableCell>
              <TableCell align="left">
                <ButtonDeleteProveedor />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
