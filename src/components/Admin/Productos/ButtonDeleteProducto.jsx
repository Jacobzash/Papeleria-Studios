import React, { useContext } from "react";
import IconButton from "@material-ui/core/IconButton";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import Swal from "sweetalert2";

import { AdminContext } from "../../../context/AdminContext";
import { deleteProductApi } from "../../../api/product";

export const ButtonDeleteProducto = ({ data }) => {
  const { products, setProducts, tmp, setTmp } = useContext(AdminContext);

  const handleClick = async () => {
    const result = await Swal.fire({
      title: `¿Está seguro de borrar el producto ${data.nom_produc}?`,
      text: "No se puede revertir esta acción.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, borrar esto",
      cancelButtonText: "Cancelar",
    });
    if (result.isConfirmed) {
      const response = await deleteProductApi(data.id);
      if (response.ok) {
        Swal.fire(response.msg, "", "success");
        setProducts(products.filter((product) => product.id !== data.id));
        setTmp(tmp.filter((product) => product.id !== data.id));
      }
    }
  };
  return (
    <IconButton color="secondary" onClick={handleClick}>
      <DeleteForeverIcon />
    </IconButton>
  );
};
