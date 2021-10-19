import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { ButtonEditCategoria } from "./ButtonEditCategoria";
import { ButtonDeleteCategoria } from "./ButtonDeleteCategoria";

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

function createData(ID, nombre, descripcion) {
  return { ID, nombre, descripcion };
}

const rows = [
  createData(159, "Lapices", "Lapices de todos los tamaños y colores"),
  createData(237, "Cuadernos", "Cuadernos de todos los tamaños"),
  createData(
    262,
    "Lapiceros",
    "No sé que poner acá, entonces lorem ipsum lorem ahahahaha"
  ),
  createData(
    305,
    "Correctores",
    "Correctores para borrar los errores que cometimos en el pasado"
  ),
  createData(
    356,
    "Borradores",
    "Borradores para borrar los malos recuerdos :( Borradores para borrar los malos recuerdos :( Borradores para borrar los malos recuerdos :( Borradores para borrar los malos recuerdos :( Borradores para borrar los malos recuerdos :( Borradores para borrar los malos recuerdos :("
  ),
  createData(
    357,
    "Borradores",
    "Borradores para borrar los malos recuerdos :("
  ),
  createData(
    336,
    "Borradores",
    "Borradores para borrar los malos recuerdos :("
  ),
  createData(
    346,
    "Borradores",
    "Borradores para borrar los malos recuerdos :("
  ),
];

export const TableCategorias = () => {
  const classes = useStyles();

  return (
    <TableContainer className={classes.tableContainer} component={Paper}>
      <Table
        stickyHeader
        size="small"
        className={classes.table}
        aria-label="Tabla de Categorías"
      >
        <TableHead>
          <TableRow>
            <TableCell className={classes.tableHead}>ID Categoría</TableCell>
            <TableCell className={classes.tableHead} align="left">
              Nombre
            </TableCell>
            <TableCell className={classes.tableHead} align="left">
              Descripción
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
              <TableCell align="left">{row.descripcion}</TableCell>
              <TableCell align="left">
                <ButtonEditCategoria data={row} />
              </TableCell>
              <TableCell align="left">
                <ButtonDeleteCategoria />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
