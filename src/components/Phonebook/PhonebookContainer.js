import React from "react";
import { useSelector } from "react-redux";

import Phonebook from "./Phonebook";

import { themeSelectors } from "../../redux/theme";
import { errorSelectors } from "../../redux/error";

export default function PhonebookContainer({ children }) {
  const theme = useSelector(themeSelectors.getTheme);
  const isError = useSelector(errorSelectors.getError);

  return (
    <Phonebook theme={theme} isError={isError}>
      {children}
    </Phonebook>
  );
}
