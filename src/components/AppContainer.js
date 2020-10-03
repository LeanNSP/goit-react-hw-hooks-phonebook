import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import App from "./App";

import { themeSelectors } from "../redux/theme";
import { authOperation, authSelectors } from "../redux/auth";

export default function AppContainer() {
  const theme = useSelector(themeSelectors.getTheme);
  const token = useSelector(authSelectors.isAuthenticated);
  const dispatch = useDispatch();

  useEffect(() => {
    authOperation.getCurrentUser(dispatch, token);
  }, [dispatch, token]);

  return <App theme={theme} />;
}
