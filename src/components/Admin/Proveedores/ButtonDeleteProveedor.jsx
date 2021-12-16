import React, { useContext } from "react";
import IconButton from "@material-ui/core/IconButton";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import Swal from "sweetalert2";
import { deleteProviderApi } from "../../../api/provider";

import { AdminContext } from "../../../context/AdminContext";

export const ButtonDeleteProveedor = ({ data }) => {
  const { providers, setProviders, setTmp, tmp } = useContext(AdminContext);

  const handleClick = async () => {
    const result = await Swal.fire({
      title: `¿Está seguro de borrar el proveedor ${data.nom_prov}?`,
      text: "No se puede revertir esta acción.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, borrar esto",
      cancelButtonText: "Cancelar",
    });
    if (result.isConfirmed) {
      const response = await deleteProviderApi(data.id);
      if (response.ok) {
        Swal.fire(response.msg, "", "success");
        setProviders(providers.filter((prov) => prov.id !== data.id));
        setTmp(tmp.filter((prov) => prov.id !== data.id));
      }
    }
  };
  return (
    <IconButton color="secondary" onClick={handleClick}>
      <DeleteForeverIcon />
    </IconButton>
  );
};
