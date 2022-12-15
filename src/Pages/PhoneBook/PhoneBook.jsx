import ContactForm from '../../components/Form';
import ContactList from '../../components/ContactList';
import Filter from '../../components/Filter';
import { Box } from '../../Utils/Box';
import { MaineTitle } from './PhoneBook.styled';

export const PhoneBookPage = () => {
  return (
    <>
      <Box display="flex">
        <Box
          marginLeft="auto"
          marginRight="auto"
          padding={4}
          border="phonebook"
          backgroundColor="phonebookBcg"
          boxShadow="boxShadow"
          minWidth="572px"
        >
          <MaineTitle>Phonebook</MaineTitle>
          <ContactForm />
          <Filter />
          <ContactList />
        </Box>
      </Box>
    </>
  );
};
