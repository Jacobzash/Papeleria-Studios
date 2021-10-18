import React from "react";
import PropTypes from "prop-types";
import { Redirect, Route } from "react-router-dom";

export const PublicRoute = ({
  isLoggedIn,
  component: Component,
  restricted,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      component={(props) =>
        isLoggedIn && restricted ? (
          <Redirect to="/admin" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

PublicRoute.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  restricted: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired,
};
