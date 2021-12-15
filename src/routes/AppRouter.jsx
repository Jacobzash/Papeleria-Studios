import React, { useContext, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { Login } from "../pages/Login";

import { ScrollToTop } from "../utils/ScrollToTop";

import { makeStyles } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";

import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import { Dashboard } from "../components/Admin/Dashboard";

import { AdminRouter } from "./AdminRouter";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";
import { Error404 } from "../pages/Error404";
import { AuthContext } from "../context/AuthContext";
import { Productos } from "../pages/Productos";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
  main: {
    padding: theme.spacing(0, 2),
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(10),
    minHeight: "100%",
  },
}));

export const AppRouter = () => {
  const classes = useStyles();
  const { auth, checkToken } = useContext(AuthContext);
  useEffect(() => {
    checkToken();
    //eslint-disable-next-line
  }, []);
  if (auth.loading) return <div>Loading...</div>;
  return (
    <Router>
      <ScrollToTop />
      <div className={classes.root}>
        {auth.logged ? <Dashboard /> : <Header />}
        <main className={classes.main}>
          <CssBaseline />
          <Switch>
            <PublicRoute
              isLoggedIn={auth.logged}
              restricted={false}
              exact
              path="/"
              component={Home}
            />
            <PublicRoute
              isLoggedIn={auth.logged}
              restricted={false}
              exact
              path="/productos"
              component={Productos}
            />
            <PublicRoute
              isLoggedIn={auth.logged}
              restricted={true}
              exact
              path="/login"
              component={Login}
            />
            <PrivateRoute
              isLoggedIn={auth.logged}
              path="/admin"
              component={AdminRouter}
            />
            <Route component={Error404} />
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
};
