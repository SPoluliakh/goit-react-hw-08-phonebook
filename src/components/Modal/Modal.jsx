import PropTypes from 'prop-types';
import { useEffect } from 'react';

import { createPortal } from 'react-dom';
import { ImCross } from 'react-icons/im';
import { Overlay, Inner, CloseBtn } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ toggleModal, children }) => {
  useEffect(() => {
    const coseModal = evt => {
      if (evt.code === 'Escape') {
        toggleModal();
      }
    };
    window.addEventListener('keydown', coseModal);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', coseModal);
      document.body.style.overflow = '';
    };
  }, [toggleModal]);

  const closeOnClick = evt => {
    if (evt.target === evt.currentTarget) {
      toggleModal();
    }
  };

  return createPortal(
    <Overlay onClick={closeOnClick}>
      <Inner>
        {children}
        <CloseBtn type="button" onClick={toggleModal}>
          <ImCross size="16" />
        </CloseBtn>
      </Inner>
    </Overlay>,

    modalRoot
  );
};

Modal.propTypes = {
  toggleModal: PropTypes.func,
  children: PropTypes.node,
};
