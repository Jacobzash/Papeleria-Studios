import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";

import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import CategoryIcon from "@material-ui/icons/Category";
import CreateIcon from "@material-ui/icons/Create";
import PlaylistAddCheckIcon from "@material-ui/icons/PlaylistAddCheck";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import EqualizerIcon from "@material-ui/icons/Equalizer";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";
import AppsIcon from "@material-ui/icons/Apps";
import PersonIcon from "@material-ui/icons/Person";
import { AuthContext } from "../../context/AuthContext";

const useStyles = makeStyles((theme) => ({
  nested: {
    paddingLeft: theme.spacing(6),
  },
}));

export const ListMenu = ({ handleDrawerClose }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const { logout } = useContext(AuthContext);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <ListItem button onClick={handleClick}>
        <ListItemIcon>
          <AppsIcon />
        </ListItemIcon>
        <ListItemText primary="Panel Administrador" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListMenuItem
            route="/admin/categorias"
            handleDrawerClose={handleDrawerClose}
            icon={<CategoryIcon />}
            classe={classes.nested}
            text="Categorias"
          />
          <ListMenuItem
            route="/admin/productos"
            handleDrawerClose={handleDrawerClose}
            icon={<CreateIcon />}
            classe={classes.nested}
            text="Productos"
          />
          <ListMenuItem
            route="/admin/proveedor"
            handleDrawerClose={handleDrawerClose}
            icon={<LocalShippingIcon />}
            classe={classes.nested}
            text="Proveedores"
          />
          <ListMenuItem
            route="/admin/inventario"
            handleDrawerClose={handleDrawerClose}
            icon={<PlaylistAddCheckIcon />}
            classe={classes.nested}
            text="Inventario"
          />
          <ListMenuItem
            route="/admin/ventas"
            handleDrawerClose={handleDrawerClose}
            icon={<AttachMoneyIcon />}
            classe={classes.nested}
            text="Ventas"
          />
          <ListMenuItem
            route="/admin/estadisticas"
            handleDrawerClose={handleDrawerClose}
            icon={<EqualizerIcon />}
            classe={classes.nested}
            text="Estadisticas"
          />
        </List>
      </Collapse>
      <Divider />
      <Link to="/login" onClick={logout}>
        <ListItem button onClick={handleDrawerClose}>
          <ListItemIcon>
            <PersonIcon />
          </ListItemIcon>
          <ListItemText primary="Cerrar sesión" />
        </ListItem>
      </Link>
    </>
  );
};

const ListMenuItem = ({ route, handleDrawerClose, icon, classe, text }) => {
  return (
    <Link to={route}>
      <ListItem button onClick={handleDrawerClose} className={classe}>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={text} />
      </ListItem>
    </Link>
  );
};
