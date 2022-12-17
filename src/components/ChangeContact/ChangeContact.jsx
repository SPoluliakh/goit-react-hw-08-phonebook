import PropTypes from 'prop-types';
import { useState } from 'react';
import { Modal } from 'components/Modal/Modal';
import ChangeContactForm from './ChangeContactForm';

const ChangeContact = ({ id }) => {
  const [addContact, setAddContact] = useState(false);

  const toggleModal = () => {
    setAddContact(prevState => !prevState);
  };

  return (
    <>
      <button type="button" onClick={toggleModal}>
        Change
      </button>
      {addContact && (
        <Modal toggleModal={toggleModal}>
          <ChangeContactForm id={id} toggleModal={toggleModal} />
        </Modal>
      )}
    </>
  );
};

export default ChangeContact;

ChangeContact.propTypes = {
  id: PropTypes.string,
};
