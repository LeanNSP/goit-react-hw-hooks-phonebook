import React from "react";
import { useSelector } from "react-redux";

import Filter from "./Filter";

import { contactsSelectors } from "../../redux/contacts";
import { themeSelectors } from "../../redux/theme";

export default function FilterContainer() {
  const contacts = useSelector(contactsSelectors.getContacts);
  const filter = useSelector(contactsSelectors.getFilter);
  const theme = useSelector(themeSelectors.getTheme);

  return <Filter contacts={contacts} filter={filter} theme={theme} />;
}
