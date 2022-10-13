import React from 'react';
import { useSelector } from 'react-redux';
import { selectAccessToken } from 'redux/auth/authSelectors';

import {
  FooterStyled,
  FooterTextStyled,
  FooterButtonStyled,
} from './Footer.styled';
import Button from 'components/common/button/Button';
import Modal from 'components/common/modal/Modal';
import { IoIosClose } from 'react-icons/io';
import Box from 'components/common/box';
import Team from './team/Team';
import useMatchMedia from 'hooks/useMatchMedia';
import useToggleModal from 'hooks/toggleModal';
// import PropTypes from 'prop-types';

const Footer = () => {
  const { isMobile } = useMatchMedia();

  const {
    isFooterOpen,
    // openFooterModal,
    toggleFooterModal,
    closeFooterModal,
    handleKeyDown,
    handleBackdropClick,
    hasBtnClose = true,
  } = useToggleModal();
  return (
    <>
      <FooterStyled>
        <FooterTextStyled>
          ©2022 Healthy-mom | created by&nbsp;
        </FooterTextStyled>
        <Button
          onClick={() => toggleFooterModal()}
          style={{
            backgroundColor: 'transparent',
            boxShadow: 'none',
            color: '#000',
            padding: 0,
          }}
        >
          GoIT Team #1
        </Button>

        {isFooterOpen && (
          <Modal
            closeModal={closeFooterModal}
            handleKeyDown={handleKeyDown}
            handleBackdropClick={handleBackdropClick}
          >
            <Box position="absolute" top="0" right="0" zIndex="100">
              {hasBtnClose && (
                <FooterButtonStyled
                  type="button"
                  onClick={closeFooterModal}
                  aria-label="close modal"
                >
                  <IoIosClose size="20px" />
                </FooterButtonStyled>
              )}
            </Box>
            <Team />
          </Modal>
        )}
      </FooterStyled>
    </>
  );
};

export default Footer;
