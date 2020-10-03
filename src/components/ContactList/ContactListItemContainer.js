import React from "react";
import { useSelector } from "react-redux";

import ContactListItem from "./ContactListItem";

import { contactsSelectors } from "../../redux/contacts";
import { themeSelectors } from "../../redux/theme";

export default function ContactListItemContainer({ id, onRemove }) {
  const contacts = useSelector(contactsSelectors.getContacts);
  const item = contacts.find((item) => item.id === id);

  const theme = useSelector(themeSelectors.getTheme);

  return <ContactListItem {...item} theme={theme} onRemove={onRemove} />;
}
