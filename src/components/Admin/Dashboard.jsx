import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Hidden from "@material-ui/core/Hidden";

import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";

import { Link } from "react-router-dom";
import { DrawerAdmin } from "./DrawerAdmin";

const useStyles = makeStyles((theme) => ({
  toolBar: {
    display: "flex",
    justifyContent: "space-between",
  },
  title: {
    flexGrow: 1,
  },
  offset: theme.mixins.toolbar,
}));

export const Dashboard = () => {
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
        <Toolbar className={classes.toolBar}>
          <Link to="/">
            <Typography variant="h6" className={classes.title}>
              Papeleria Studios
            </Typography>
          </Link>
          <Hidden mdUp>
            <IconButton
              color="inherit"
              aria-label="menu"
              onClick={() => handleDrawerOpen()}
            >
              <MenuIcon />
            </IconButton>
          </Hidden>
          <Hidden smDown>
            <Link to="/login">
              <Button color="inherit">Login</Button>
            </Link>
          </Hidden>
        </Toolbar>
      </AppBar>
      <div className={classes.offset}></div>
      <DrawerAdmin open={open} handleDrawerClose={handleDrawerClose} />
    </>
  );
};
