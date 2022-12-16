import { useState } from 'react';
import { Modal } from 'components/Modal/Modal';
import ContactForm from 'components/AddContactButton/AddContactForm';

const AddContactButton = () => {
  const [addContact, setAddContact] = useState(false);

  const toggleModal = () => {
    setAddContact(prevState => !prevState);
  };

  return (
    <>
      <button type="button" onClick={toggleModal}>
        Add contact
      </button>
      {addContact && (
        <Modal toggleModal={toggleModal}>
          <ContactForm />
        </Modal>
      )}
    </>
  );
};

export default AddContactButton;
