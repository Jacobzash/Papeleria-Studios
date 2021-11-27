import React, { useContext } from "react";
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

import { ProvidersContext } from "../../../context/ProvidersContext";

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

export const TableProveedores = () => {
  const classes = useStyles();

  const { providers } = useContext(ProvidersContext);

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
          {providers.map((provider) => (
            <TableRow className={classes.tableRow} key={provider.id}>
              <TableCell component="th" scope="row">
                {provider.id}
              </TableCell>
              <TableCell align="left">{provider.nom_prov}</TableCell>
              <TableCell align="left">{provider.contacto_prov}</TableCell>
              <TableCell align="left">
                <ButtonEditProveedor data={provider} />
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
