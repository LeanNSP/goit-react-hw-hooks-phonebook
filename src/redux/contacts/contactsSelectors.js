import { createSelector } from "@reduxjs/toolkit";

const getContacts = (state) => state.contacts.items;

const getFilter = (state) => state.contacts.filter;

const getLoadingContact = (state) => state.contacts.loadingContact;

const getVisibleContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    const normalaizedFilter = filter.toLowerCase();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalaizedFilter)
    );
  }
);

export default {
  getContacts,
  getFilter,
  getLoadingContact,
  getVisibleContacts,
};
