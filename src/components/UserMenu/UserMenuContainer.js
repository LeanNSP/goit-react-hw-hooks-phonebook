import React from "react";
import { useSelector } from "react-redux";

import UserMenu from "./UserMenu";

import { authSelectors } from "../../redux/auth";
import { themeSelectors } from "../../redux/theme";

export default function UserMenuContainer() {
  const name = useSelector(authSelectors.getUserName);
  const theme = useSelector(themeSelectors.getTheme);

  return <UserMenu name={name} theme={theme} />;
}
