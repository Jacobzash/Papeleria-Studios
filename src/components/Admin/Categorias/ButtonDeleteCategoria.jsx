import React, { useContext } from "react";
import IconButton from "@material-ui/core/IconButton";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import { deleteCategoryApi } from "../../../api/category";
import Swal from "sweetalert2";

import { AdminContext } from "../../../context/AdminContext";

export const ButtonDeleteCategoria = ({ data }) => {
  const { categories, setCategories } = useContext(AdminContext);
  const handleClick = async () => {
    const result = await Swal.fire({
      title: `¿Está seguro de borrar la categoria ${data.nom_cat}?`,
      text: "No se puede revertir esta acción.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, borrar esto",
      cancelButtonText: "Cancelar",
    });
    if (result.isConfirmed) {
      const response = await deleteCategoryApi(data.id);
      if (response.ok) {
        Swal.fire(response.msg, "", "success");
        setCategories(categories.filter((category) => category.id !== data.id));
      }
    }
  };
  return (
    <IconButton color="secondary" onClick={handleClick}>
      <DeleteForeverIcon />
    </IconButton>
  );
};
