import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import ContactForm from "./ContactForm";

import { errorAction } from "../../redux/error";
import { contactsOperations, contactsSelectors } from "../../redux/contacts";
import { themeSelectors } from "../../redux/theme";

export default function ContactFormContainer() {
  const [name, setName] = useState("");
  const updName = (target) => setName(target.value);

  const [number, setNumber] = useState("");
  const updNumber = (target) => setNumber(target.value);

  const contacts = useSelector(contactsSelectors.getContacts);
  const theme = useSelector(themeSelectors.getTheme);

  const dispatch = useDispatch();

  const handleSubmit = (evt) => {
    evt.preventDefault();

    const newContact = { name, number };

    isSuchContact()
      ? dispatch(errorAction.openNotifyError(`${name} is already in contacts!`))
      : contactsOperations.addContact(newContact, dispatch);

    clearForm();
  };

  const isSuchContact = () => {
    return contacts.find(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
    );
  };

  const clearForm = () => {
    setName("");
    setNumber("");
  };

  return (
    <ContactForm
      name={name}
      number={number}
      theme={theme}
      onSubmit={handleSubmit}
      onNameChange={updName}
      onNumberChange={updNumber}
    />
  );
}
