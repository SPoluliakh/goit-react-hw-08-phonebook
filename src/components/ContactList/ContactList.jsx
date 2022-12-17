import React, { useEffect } from 'react';
import * as SC from './ContactList.styled';
import { ContactListItem } from '../ContactListItem/ContactListItem';
import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from '../../Redux/contacts/filterSlice';
import * as contactsOperations from '../../Redux/contacts/contactsOperations';
import { getContacts } from 'Redux/contacts/contactsSelectors';

export const ContactList = () => {
  const contactList = useSelector(getContacts);
  const filterItem = useSelector(getFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  //Responsible for rendering the requested/all contacts
  const findContactbyName = () => {
    return contactList.filter(contact =>
      contact?.name.toLowerCase().includes(filterItem)
    );
  };

  return (
    <>
      <SC.TotalContacts>
        Contacts : {findContactbyName().length}
      </SC.TotalContacts>

      <SC.List>
        {findContactbyName().map(({ name, number, id }) => (
          <ContactListItem key={id} name={name} number={number} id={id} />
        ))}
      </SC.List>
    </>
  );
};
