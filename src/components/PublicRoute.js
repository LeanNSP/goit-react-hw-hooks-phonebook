import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

import routes from "../routes/routes";

import { authSelectors } from "../redux/auth";

export default function PublicRoute({
  component: Component,
  restricted,
  ...routeProps
}) {
  const isAuthenticated = useSelector(authSelectors.isAuthenticated);

  return (
    <Route
      {...routeProps}
      render={(props) =>
        isAuthenticated && restricted ? (
          <Redirect to={routes.contactPage} />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
}
