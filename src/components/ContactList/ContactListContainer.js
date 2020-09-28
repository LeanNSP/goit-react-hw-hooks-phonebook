import React from "react";
import { useSelector } from "react-redux";

import ContactList from "./ContactList";

import { contactsSelectors } from "../../redux/contacts";

export default function ContactListContainer() {
  const contacts = useSelector(contactsSelectors.getVisibleContacts);

  return <ContactList contacts={contacts} />;
}
