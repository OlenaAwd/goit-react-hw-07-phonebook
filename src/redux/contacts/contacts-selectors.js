  
import { createSelector } from '@reduxjs/toolkit';  

export const getContacts = state => state.contacts.items;
export const getFilter = state => state.contacts.filter;
const getLoading = state => state.contacts.loading;
export const getError = state => state.contacts.error;

export const getAddedContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter),
    );
  },
);