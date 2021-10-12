import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import * as contactsAPI from '../../services/contacts-api';
import {
    fetchContactsRequest,
    fetchContactsSuccess,
    fetchContactsError,
    addContactRequest,
    addContactSuccess,
    addContactError,
    deleteContactRequest,
    deleteContactSuccess,
    deleteContactError,
} from './contacts-actions';

export const fetchContacts = () => dispatch => {
  dispatch(fetchContactsRequest());

  contactsAPI
    .fetchContacts()
    .then(({ data }) => dispatch(fetchContactsSuccess(data)))
    .catch(error => dispatch(fetchContactsError(error)));
};

export const addContact = (name, number) => dispatch => {
  const contact = {
    name,
    number,
  };

  dispatch(addContactRequest());

  contactsAPI
    .addContact(contact)
    .then(({ data }) => dispatch(addContactSuccess(data)))
    .catch(error => dispatch(addContactError(error)));
};

export const deleteContact = id => dispatch => {
  dispatch(deleteContactRequest());

  contactsAPI
    .deleteContact(id)
    .then(() => dispatch(deleteContactSuccess(id)))
    .catch(error => dispatch(deleteContactError(error)));
};

// export const fetchContacts = () => async dispatch => {
//     dispatch(fetchContactsRequest());

//     try {
//         const contacts = await contactsAPI.fetchContacts();
//         dispatch(fetchContactsSuccess(contacts));
//     } catch (error) {
//         dispatch(fetchContactsError(error));
//     }
// };

// export const fetchContacts = createAsyncThunk(
//     'contacts/fetchContacts',
//     async (_, { rejectWithValue }) => {
//         try {
//             const contacts = await contactsAPI.fetchContacts();
//             return contacts;
//     }       catch (error) {
//             return rejectWithValue(error);
//     }
//   },
// );






