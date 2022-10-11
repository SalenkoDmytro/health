import React from 'react';
import { FooterStyled, FooterTextStyled } from './Footer.styled';
import Button from 'components/common/button/Button';
import Modal from 'components/common/modal/Modal';
import Team from './team/Team';

import useToggleModal from 'hooks/toggleModal';
// import PropTypes from 'prop-types';

const Footer = () => {
  const {
    isOpen,
    openModal,
    // toggleModal,
    closeModal,
    handleKeyDown,
    handleBackdropClick,
  } = useToggleModal();
  return (
    <>
      <FooterStyled>
        <FooterTextStyled>
          ©2022 Healthy-mom | created by&nbsp;
        </FooterTextStyled>
        <Button
          onClick={() => openModal()}
          style={{
            backgroundColor: 'transparent',
            boxShadow: 'none',
            color: '#000',
          }}
        >
          GoIT Team #1
        </Button>
        {isOpen && (
          <Modal
            closeModal={closeModal}
            handleKeyDown={handleKeyDown}
            handleBackdropClick={handleBackdropClick}
          >
            <Team />
          </Modal>
        )}
      </FooterStyled>
    </>
  );
};

export default Footer;
