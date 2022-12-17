import PropTypes from 'prop-types';
import * as SC from './ContactListItem.styled';
import { useDispatch } from 'react-redux';
import { deleteContacts } from 'Redux/contacts/contactsOperations';
import ChangeContact from 'components/ChangeContact/ChangeContact';
import { FcCancel, FcPhoneAndroid } from 'react-icons/fc';

const ContactListItem = ({ name, number, id }) => {
  const dispatch = useDispatch();

  return (
    <>
      <SC.ListItem>
        <ChangeContact id={id} />
        <SC.ListItemText>
          {<FcPhoneAndroid size="17px" />} {name}: {number}
        </SC.ListItemText>
        <SC.ListItemBtn
          variant="contained"
          type="button"
          aria-label="delete contact"
          onClick={() => dispatch(deleteContacts(id))}
        >
          {<FcCancel size="28px" />}
        </SC.ListItemBtn>
      </SC.ListItem>
    </>
  );
};

export default ContactListItem;

ContactListItem.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  id: PropTypes.string,
};
