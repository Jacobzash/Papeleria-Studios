import React from "react";
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
      <ListItem button onClick={handleDrawerClose}>
        <ListItemIcon>
          <CategoryIcon />
        </ListItemIcon>
        <ListItemText primary="Categorías" />
      </ListItem>
      <ListItem button onClick={handleDrawerClose}>
        <ListItemIcon>
          <CreateIcon />
        </ListItemIcon>
        <ListItemText primary="Productos" />
      </ListItem>
      <ListItem button onClick={handleDrawerClose}>
        <ListItemIcon>
          <LocalShippingIcon />
        </ListItemIcon>
        <ListItemText primary="Proveedores" />
      </ListItem>
      <ListItem button onClick={handleDrawerClose}>
        <ListItemIcon>
          <PlaylistAddCheckIcon />
        </ListItemIcon>
        <ListItemText primary="Inventario" />
      </ListItem>
      <ListItem button onClick={handleDrawerClose}>
        <ListItemIcon>
          <AttachMoneyIcon />
        </ListItemIcon>
        <ListItemText primary="Ventas" />
      </ListItem>
      <ListItem button onClick={handleDrawerClose}>
        <ListItemIcon>
          <EqualizerIcon />
        </ListItemIcon>
        <ListItemText primary="Estadisticas" />
      </ListItem>
    </div>
  );
};
