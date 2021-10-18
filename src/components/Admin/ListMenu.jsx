import React from "react";
import { Link } from "react-router-dom";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import CategoryIcon from "@material-ui/icons/Category";
import CreateIcon from "@material-ui/icons/Create";
import PlaylistAddCheckIcon from "@material-ui/icons/PlaylistAddCheck";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import EqualizerIcon from "@material-ui/icons/Equalizer";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";

export const ListMenu = ({ handleDrawerClose }) => {
  return (
    <div>
      <Link to="/admin/categorias">
        <ListItem button onClick={handleDrawerClose}>
          <ListItemIcon>
            <CategoryIcon />
          </ListItemIcon>
          <ListItemText primary="Categorías" />
        </ListItem>
      </Link>
      <Link to="/admin/productos">
        <ListItem button onClick={handleDrawerClose}>
          <ListItemIcon>
            <CreateIcon />
          </ListItemIcon>
          <ListItemText primary="Productos" />
        </ListItem>
      </Link>
      <Link to="/admin/proveedores">
        <ListItem button onClick={handleDrawerClose}>
          <ListItemIcon>
            <LocalShippingIcon />
          </ListItemIcon>
          <ListItemText primary="Proveedores" />
        </ListItem>
      </Link>
      <Link to="/admin/inventario">
        <ListItem button onClick={handleDrawerClose}>
          <ListItemIcon>
            <PlaylistAddCheckIcon />
          </ListItemIcon>
          <ListItemText primary="Inventario" />
        </ListItem>
      </Link>
      <Link to="/admin/ventas">
        <ListItem button onClick={handleDrawerClose}>
          <ListItemIcon>
            <AttachMoneyIcon />
          </ListItemIcon>
          <ListItemText primary="Ventas" />
        </ListItem>
      </Link>
      <Link to="/admin/estadisticas">
        <ListItem button onClick={handleDrawerClose}>
          <ListItemIcon>
            <EqualizerIcon />
          </ListItemIcon>
          <ListItemText primary="Estadisticas" />
        </ListItem>
      </Link>
    </div>
  );
};
