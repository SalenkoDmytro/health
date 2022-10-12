import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { ModalBackdrop, ModalContent } from './Modal.styled';
// import { IoIosClose } from 'react-icons/io';
// import ButtonIcon from 'components/common/buttonIcon';
// import Box from 'components/common/box';
import useMatchMedia from 'hooks/useMatchMedia';

const modalRoot = document.querySelector('#root');

export default function Modal({
  children = '',
  handleKeyDown = () => {},
  handleBackdropClick = () => {},
  closeModal = () => {},
  hasBtnClose = true,
}) {
  const { isMobile } = useMatchMedia();

  useEffect(() => {
    if (isMobile) {
      return;
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown, isMobile]);

  return createPortal(
    <ModalBackdrop onClick={handleBackdropClick}>
      <ModalContent>
        {/* <Box position="absolute" top="0" right="0" zIndex="100">
          {hasBtnClose && (
            <ButtonIcon
              type="button"
              onClick={closeModal}
              aria-label="close modal"
            >
              <IoIosClose size="20px" />
            </ButtonIcon>
          )}
        </Box> */}
        {children}
      </ModalContent>
    </ModalBackdrop>,
    modalRoot
  );
}

Modal.propTypes = {
  children: PropTypes.node,
};
