import { createDraftSafeSelector } from '@reduxjs/toolkit';

export const getContactsState = state => state.contacts;

export const getContacts = createDraftSafeSelector(
  getContactsState,
  state => state.contacts
);
