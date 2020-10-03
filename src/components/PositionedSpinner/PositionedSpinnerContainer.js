import React from "react";
import { useSelector } from "react-redux";

import PositionedSpinner from "./PositionedSpinner";

import { themeSelectors } from "../../redux/theme";

export default function PositionedSpinnerContainer() {
  const theme = useSelector(themeSelectors.getTheme);

  return <PositionedSpinner theme={theme} />;
}
