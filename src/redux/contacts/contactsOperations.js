import { contactsActions } from "./";

import fetchDB from "../../services/fetchDB";

const addContact = async (contact, dispatch) => {
  dispatch(contactsActions.addContactRequest());

  try {
    const data = await fetchDB.post("/contacts", contact);

    dispatch(contactsActions.addContactSuccess(data));
  } catch (error) {
    dispatch(contactsActions.addContactError(error.message));
  }
};

const fetchContacts = async (dispatch) => {
  dispatch(contactsActions.fetchContactsRequest());

  try {
    const data = await fetchDB.get("/contacts");

    dispatch(contactsActions.fetchContactsSuccess(data));
  } catch (error) {
    dispatch(contactsActions.fetchContactsError(error.message));
  }
};

const removeContact = async (id, dispatch) => {
  dispatch(contactsActions.removeContactRequest());

  try {
    await fetchDB.del(`/contacts/${id}`);

    dispatch(contactsActions.removeContactSuccess(id));
  } catch (error) {
    dispatch(contactsActions.removeContactError(error.message));
  }
};

export default {
  addContact,
  fetchContacts,
  removeContact,
};
