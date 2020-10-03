import React from "react";
import { useSelector } from "react-redux";

import Contacts from "./Contacts";

import { contactsSelectors } from "../../redux/contacts";
import { themeSelectors } from "../../redux/theme";

export default function ContactsContainer({ children }) {
  const contacts = useSelector(contactsSelectors.getContacts);
  const theme = useSelector(themeSelectors.getTheme);
  const isLoadingContact = useSelector(contactsSelectors.getLoadingContact);

  return (
    <Contacts
      contacts={contacts}
      theme={theme}
      isLoadingContact={isLoadingContact}
    >
      {children}
    </Contacts>
  );
}
