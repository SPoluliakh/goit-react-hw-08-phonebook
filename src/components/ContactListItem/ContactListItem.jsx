import PropTypes from 'prop-types';
import { ListItem, ListItemText, ListItemBtn } from './ContactListItem.styled';
import { useDispatch } from 'react-redux';
import { deleteContacts } from 'Redux/contacts/contactsOperations';

const ContactListItem = ({ name, number, id }) => {
  const dispatch = useDispatch();
  return (
    <>
      <ListItem>
        <ListItemText>
          {name}: {number}
        </ListItemText>
        <ListItemBtn
          variant="contained"
          type="button"
          aria-label="delete contact"
          onClick={() => dispatch(deleteContacts(id))}
        >
          Delete
        </ListItemBtn>
      </ListItem>
    </>
  );
};

export default ContactListItem;

ContactListItem.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  id: PropTypes.string,
};
