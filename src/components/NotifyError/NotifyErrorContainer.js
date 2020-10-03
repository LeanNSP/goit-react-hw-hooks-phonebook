import React from "react";
import { useSelector } from "react-redux";

import NotifyError from "./NotifyError";

import { themeSelectors } from "../../redux/theme";

export default function NotifyErrorContainer({ isError }) {
  const theme = useSelector(themeSelectors.getTheme);

  return <NotifyError theme={theme} isError={isError} />;
}
