import ContactList from '../../components/ContactList';
import Filter from '../../components/Filter';
import { MaineTitle } from './PhoneBook.styled';

export const PhoneBookPage = () => {
  return (
    <>
      <MaineTitle>Phonebook</MaineTitle>
      <Filter />
      <ContactList />
    </>
  );
};
