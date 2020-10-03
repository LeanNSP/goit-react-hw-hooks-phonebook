import React from "react";
import { useSelector } from "react-redux";

import RegisterPage from "./RegisterPage";

import { themeSelectors } from "../../../redux/theme";

export default function RegisterPageContainer() {
  const theme = useSelector(themeSelectors.getTheme);

  return <RegisterPage theme={theme} />;
}
