import React, { useContext } from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { makeStyles } from "@material-ui/core/styles";
import CreateIcon from "@material-ui/icons/Create";
import HomeIcon from "@material-ui/icons/Home";
import PersonIcon from "@material-ui/icons/Person";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const useStyles = makeStyles((theme) => ({
  white: {
    color: "#FFF",
  },
  link: {
    color: "#FFF",
    display: "flex",
    alignItems: "center",
    "&:hover": {
      color: "#000",
    },
  },
}));
export const NavegacionFooter = () => {
  const classes = useStyles();
  const { auth } = useContext(AuthContext);
  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography variant="h5" className={classes.white}>
          Navegación
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <List component="ul">
          <ListItem>
            <Link to="/" className={classes.link}>
              <HomeIcon />
              <Typography variant="body1">Inicio</Typography>
            </Link>
          </ListItem>
          {auth.logged ? (
            <></>
          ) : (
            <ListItem>
              <Link to="/" className={classes.link}>
                <PersonIcon />
                <Typography variant="body1">Login</Typography>
              </Link>
            </ListItem>
          )}
        </List>
      </Grid>
      <Grid item xs={6}>
        <List component="ul">
          <ListItem>
            <Link to="/productos" className={classes.link}>
              <CreateIcon />
              <Typography variant="body1">Productos</Typography>
            </Link>
          </ListItem>
        </List>
      </Grid>
    </Grid>
  );
};
