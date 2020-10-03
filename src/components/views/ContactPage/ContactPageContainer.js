import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import ContactPage from "./ContactPage";

import { authSelectors } from "../../../redux/auth";
import { contactsOperations } from "../../../redux/contacts";

export default function ContactPageContainer() {
  const isAuthenticated = useSelector(authSelectors.isAuthenticated);
  const dispatch = useDispatch();

  useEffect(() => {
    contactsOperations.fetchContacts(dispatch);
  }, [dispatch]);

  return <ContactPage isAuthenticated={isAuthenticated} />;
}
