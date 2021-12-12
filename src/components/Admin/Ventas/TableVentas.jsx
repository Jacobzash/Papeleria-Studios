import React, { useContext, useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import { ButtonDeleteProducto } from "../Productos/ButtonDeleteProducto";
import { Typography } from "@material-ui/core";
import { createOrderApi } from "../../../api/order";
import { AdminContext } from "../../../context/AdminContext";
import { getInventoryWithStockApi } from "../../../api/inventory";
import Swal from "sweetalert2";

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
  containerButton: {
    display: "flex",
    justifyContent: "flex-end",
  },
  buttonSell: {
    backgroundColor: "#43A047",
    color: "#FFF",
    marginTop: theme.spacing(2),
  },
}));

export const TableVentas = ({ ventas, setVentas }) => {
  const classes = useStyles();
  const { setInventory } = useContext(AdminContext);
  const [dataVentas, setDataVentas] = useState([]);

  useEffect(() => {
    setDataVentas(
      ventas.map((venta) => {
        return {
          cant_producto: venta.cantidad,
          valor_venta: venta.Producto.valor_unitario * venta.cantidad,
          id_inventario: venta.id,
          id_usuario: 2,
        };
      })
    );
  }, [ventas]);

  const handleChange = ({ target }, data) => {
    setVentas(
      ventas.map((venta) => {
        if (venta.id === data.id) {
          if (target.value > data.can_total || target.value < 1) {
            return venta;
          }
          return {
            ...data,
            [target.name]: target.value,
          };
        }
        return venta;
      })
    );
  };

  const handleClick = async () => {
    const resultOrder = await createOrderApi(dataVentas);
    if (resultOrder.ok) {
      setVentas([]);
      setDataVentas([]);
      Swal.fire(resultOrder.msg, "", "success");
    }
    setTimeout(async () => {
      const resultInventory = await getInventoryWithStockApi();
      if (resultInventory.ok) {
        setInventory(resultInventory.inventory);
      }
    }, 500);
  };
  if (ventas.length === 0) return <NoInfo />;
  return (
    <>
      <TableContainer className={classes.tableContainer} component={Paper}>
        <Table
          stickyHeader
          size="small"
          className={classes.table}
          aria-label="Tabla de Ventas"
        >
          <TableHead>
            <TableRow>
              <TableCell className={classes.tableHead} align="left">
                Producto
              </TableCell>
              <TableCell className={classes.tableHead} align="left">
                En inventario
              </TableCell>
              <TableCell
                className={classes.tableHead}
                style={{ width: 180 }}
                align="left"
              >
                Cantidad a vender
              </TableCell>
              <TableCell className={classes.tableHead} align="left">
                Precio unitario
              </TableCell>
              <TableCell className={classes.tableHead} align="left">
                Precio total
              </TableCell>
              <TableCell className={classes.tableHead} align="left">
                Eliminar
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {ventas.map((venta, i) => (
              <TableRow className={classes.tableRow} key={i}>
                <TableCell component="th" scope="row">
                  {venta.Producto.nom_produc}
                </TableCell>
                <TableCell component="th" scope="row">
                  {venta.can_total}
                </TableCell>
                <TableCell align="left">
                  <TextField
                    color="secondary"
                    value={venta.cantidad}
                    onChange={(e) => {
                      handleChange(e, venta);
                    }}
                    fullWidth
                    label="Cantidad"
                    margin="normal"
                    name="cantidad"
                    type="number"
                    variant="outlined"
                  />
                </TableCell>
                <TableCell align="left">
                  {"$" + venta.Producto.valor_unitario}
                </TableCell>
                <TableCell align="left">
                  {"$" + venta.Producto.valor_unitario * venta.cantidad}
                </TableCell>
                <TableCell align="left">
                  <ButtonDeleteProducto data={venta} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div className={classes.containerButton}>
        <Button
          variant="contained"
          className={classes.buttonSell}
          onClick={handleClick}
        >
          Realizar venta
        </Button>
      </div>
    </>
  );
};

const NoInfo = () => {
  return (
    <Typography variant="h4" align="center">
      No hay productos seleccionados aún
    </Typography>
  );
};
