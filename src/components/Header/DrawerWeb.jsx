import React from "react";
import { Drawer as Dw } from "@material-ui/core/";
import Divider from "@material-ui/core/Divider";
import makeStyles from "@material-ui/core/styles/makeStyles";
import useTheme from "@material-ui/core/styles/useTheme";

import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import IconButton from "@material-ui/core/IconButton";

import { ListMenu } from "./ListMenu";

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: 240,
    flexShrink: 0,
  },
  drawerPaper: {
    width: 240,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-start",
    backgroundColor: theme.palette.primary.main,
  },
  button: {
    color: "#ffF",
  },
}));
export const DrawerWeb = ({ open, handleDrawerClose }) => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <Dw
      anchor="right"
      variant="temporary"
      open={open}
      onClose={handleDrawerClose}
      className={classes.drawer}
      classes={{ paper: classes.drawerPaper }}
    >
      <div className={classes.drawerHeader}>
        <IconButton
          className={classes.button}
          onClick={() => handleDrawerClose()}
        >
          {theme.direction === "rtl" ? (
            <ChevronLeftIcon />
          ) : (
            <ChevronRightIcon />
          )}
        </IconButton>
      </div>
      <Divider />
      <ListMenu handleDrawerClose={handleDrawerClose} />
    </Dw>
  );
};
