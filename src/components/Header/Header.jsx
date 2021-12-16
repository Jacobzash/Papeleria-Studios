import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
import { DrawerWeb } from "./DrawerWeb";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  title: {
    flexGrow: 1,
  },
  offset: theme.mixins.toolbar,
}));

export const Header = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  return (
    <>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <Link to="/">
            <Typography variant="h6" className={classes.title}>
              Papeleria Estudios
            </Typography>
          </Link>
          <Hidden mdUp>
            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              onClick={() => handleDrawerOpen()}
            >
              <MenuIcon />
            </IconButton>
          </Hidden>
          <Hidden smDown>
            <div>
              <Link to="/productos">
                <Button color="inherit">Productos</Button>
              </Link>
              <Link to="/login">
                <Button color="inherit">Iniciar Sesión</Button>
              </Link>
            </div>
          </Hidden>
        </Toolbar>
      </AppBar>
      <div className={classes.offset}></div>
      <DrawerWeb open={open} handleDrawerClose={handleDrawerClose} />
    </>
  );
};
