import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import CreateIcon from "@material-ui/icons/Create";

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
    </>
  );
};
