import React from "react";
import { useSelector } from "react-redux";

import LoginPage from "./LoginPage";

import { themeSelectors } from "../../../redux/theme";

export default function LoginPageContainer() {
  const theme = useSelector(themeSelectors.getTheme);

  return <LoginPage theme={theme} />;
}
