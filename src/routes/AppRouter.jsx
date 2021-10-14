import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { ScrollToTop } from "../utils/ScrollToTop";

import { makeStyles } from "@material-ui/core/styles";
import { Footer } from "../components/Footer/Footer";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
  main: {
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
        <main className={classes.main}>
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
