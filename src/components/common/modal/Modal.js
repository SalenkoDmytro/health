import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { ModalBackdrop, ModalContent } from './Modal.styled';
import { IoIosClose } from 'react-icons/io';
import ButtonIcon from 'components/common/buttonIcon';
import Box from 'components/common/box';

const modalRoot = document.querySelector('#modal-root');

export default function Modal({
  children = '',
  handleKeyDown = () => {},
  handleBackdropClick = () => {},
  closeModal = () => {},
  hasBtnClose = true,
}) {
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  return createPortal(
    <ModalBackdrop onClick={handleBackdropClick}>
      <ModalContent>
        <Box position="absolute" top="0" right="0" zIndex="100">
          {hasBtnClose && (
            <ButtonIcon
              type="button"
              onClick={closeModal}
              aria-label="close modal"
            >
              <IoIosClose size="20px" />
            </ButtonIcon>
          )}
        </Box>
        {children}
      </ModalContent>
    </ModalBackdrop>,
    modalRoot
  );
}

Modal.propTypes = {
  children: PropTypes.node,
};
