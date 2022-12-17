import {
  fetchContacts,
  deleteContacts,
  postContacts,
  changeContact,
} from './contactsOperations';
import { createSlice } from '@reduxjs/toolkit';

export const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchContacts.fulfilled]: (state, { payload }) => {
      return {
        ...state,
        contacts: payload,
        isLoading: false,
      };
    },

    [fetchContacts.pending]: (state, _) => {
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    },

    [fetchContacts.rejected]: (state, { payload }) => {
      return {
        ...state,
        error: payload,
        isLoading: false,
      };
    },
    [deleteContacts.fulfilled]: (state, { payload }) => {
      return {
        ...state,
        contacts: state.contacts.filter(contact => contact.id !== payload.id),
        isLoading: false,
      };
    },
    [deleteContacts.pending]: (state, _) => {
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    },
    [deleteContacts.rejected]: (state, { payload }) => {
      return {
        ...state,
        error: payload,
        isLoading: false,
      };
    },
    [postContacts.fulfilled]: (state, { payload }) => {
      return {
        ...state,
        contacts: [payload, ...state.contacts],
        isLoading: false,
      };
    },
    [postContacts.pending]: (state, _) => {
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    },
    [postContacts.rejected]: (state, { payload }) => {
      return {
        ...state,
        error: payload,
        isLoading: false,
      };
    },

    [changeContact.fulfilled]: (state, { payload }) => {
      const oldContacts = state.contacts.find(
        contact => contact.id === payload.id
      );
      const newContacts = state.contacts.filter(
        contact => contact.id !== oldContacts.id
      );
      return {
        ...state,
        contacts: [...newContacts, payload],
        isLoading: false,
      };
    },
    [changeContact.pending]: (state, _) => {
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    },
    [changeContact.rejected]: (state, { payload }) => {
      return {
        ...state,
        error: payload,
        isLoading: false,
      };
    },
  },
});
