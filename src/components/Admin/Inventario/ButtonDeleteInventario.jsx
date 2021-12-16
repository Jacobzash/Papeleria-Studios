import React, { useContext } from "react";
import IconButton from "@material-ui/core/IconButton";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import Swal from "sweetalert2";

import { AdminContext } from "../../../context/AdminContext";
import { deleteInventoryApi } from "../../../api/inventory";

export const ButtonDeleteInventario = ({ data }) => {
  const { inventory, setInventory, tmp, setTmp } = useContext(AdminContext);

  const handleClick = async () => {
    const result = await Swal.fire({
      title: `¿Está seguro de borrar el inventario de ${data.Producto.nom_produc}?`,
      text: "No se puede revertir esta acción.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, borrar esto",
      cancelButtonText: "Cancelar",
    });
    if (result.isConfirmed) {
      const response = await deleteInventoryApi(data.id);
      if (response.ok) {
        Swal.fire(response.msg, "", "success");
        setInventory(inventory.filter((item) => item.id !== data.id));
        setTmp(tmp.filter((item) => item.id !== data.id));
      }
    }
  };

  return (
    <IconButton color="secondary" onClick={handleClick}>
      <DeleteForeverIcon />
    </IconButton>
  );
};
