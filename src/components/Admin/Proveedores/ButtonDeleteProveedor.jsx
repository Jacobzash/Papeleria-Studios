import React from "react";
import IconButton from "@material-ui/core/IconButton";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import Swal from "sweetalert2";

export const ButtonDeleteProveedor = ({ data }) => {
  const handleClick = () => {
    Swal.fire({
      title: `¿Está seguro de borrar el proveedor ${data.nom_prov}?`,
      text: "No se puede revertir esta acción.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, borrar esto",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Proveedor borrado", "", "success");
      }
    });
  };
  return (
    <IconButton color="secondary" onClick={handleClick}>
      <DeleteForeverIcon />
    </IconButton>
  );
};
