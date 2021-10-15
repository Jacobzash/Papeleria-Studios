import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { ScrollToTop } from "../utils/ScrollToTop";

import { makeStyles } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";

import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
  main: {
    padding: theme.spacing(0, 2),
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    minHeight: "100%",
  },
}));

export const AppRouter = () => {
  const classes = useStyles();
  return (
    <Router>
      <ScrollToTop />
      <div className={classes.root}>
        <Header />
        <main className={classes.main}>
          <CssBaseline />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
};
