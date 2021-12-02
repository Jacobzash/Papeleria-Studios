import React, { useContext } from "react";
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

export const TableCategorias = () => {
  const classes = useStyles();
  const { categories } = useContext(AdminContext);

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
          {categories.map((category) => (
            <TableRow className={classes.tableRow} key={category.id}>
              <TableCell component="th" scope="row">
                {category.id}
              </TableCell>
              <TableCell align="left">{category.nom_cat}</TableCell>
              <TableCell align="left">{category.des_cat}</TableCell>
              <TableCell align="left">
                <ButtonEditCategoria data={category} />
              </TableCell>
              <TableCell align="left">
                <ButtonDeleteCategoria data={category} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
