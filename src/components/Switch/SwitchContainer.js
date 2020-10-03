import React from "react";
import { useSelector } from "react-redux";

import Switch from "./Switch";

import { themeSelectors } from "../../redux/theme";

export default function SwitchContainer() {
  const theme = useSelector(themeSelectors.getTheme);

  return <Switch theme={theme} />;
}
