import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

import routes from "../routes/routes";

import { authSelectors } from "../redux/auth";

export default function PrivateRoute({ component: Component, ...routeProps }) {
  const isAuthenticated = useSelector(authSelectors.isAuthenticated);

  return (
    <Route
      {...routeProps}
      render={(props) =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to={routes.loginPage} />
        )
      }
    />
  );
}
