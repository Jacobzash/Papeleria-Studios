import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import CreateIcon from "@material-ui/icons/Create";
import PersonIcon from "@material-ui/icons/Person";

import { Link } from "react-router-dom";

export const ListMenu = ({ handleDrawerClose }) => {
  return (
    <>
      <Link to="/productos">
        <ListItem button onClick={handleDrawerClose}>
          <ListItemIcon>
            <CreateIcon />
          </ListItemIcon>
          <ListItemText primary="Productos" />
        </ListItem>
      </Link>
      <Link to="/login">
        <ListItem button onClick={handleDrawerClose}>
          <ListItemIcon>
            <PersonIcon />
          </ListItemIcon>
          <ListItemText primary="Iniciar Sesión" />
        </ListItem>
      </Link>
    </>
  );
};
