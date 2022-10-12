import DailyCaloriesForm from 'components/dailyCaloriesForm/DailyCaloriesForm';
import DailyCaloriesIntake from 'components/dailyCaloriesIntake/DailyCaloriesIntake';
import Modal from 'components/common/modal/Modal';
import useToggleModal from 'hooks/toggleModal';
import useMatchMedia from 'hooks/useMatchMedia';
import UserInfo from 'components/userInfo';
// import ButtonIcon from 'components/common/buttonIcon';
import Box from 'components/common/box';
import { IoIosClose } from 'react-icons/io';
import { Button } from './MainPage.styled';

function MainPage() {
  const {
    isOpen,
    openModal,
    hasBtnClose = true,
    // toggleModal,
    closeModal,
    handleKeyDown,
    handleBackdropClick,
  } = useToggleModal();
  const { isDesktop, isTablet, isMobile } = useMatchMedia();

  return (
    <>
      {isMobile && isOpen && <UserInfo closeModal={closeModal} />}
      {isMobile && !isOpen && <DailyCaloriesForm openModal={openModal} />}
      {isTablet && <DailyCaloriesForm openModal={openModal} />}
      {isDesktop && <DailyCaloriesForm openModal={openModal} />}

      {/* <DailyCaloriesForm openModal={openModal} /> */}
      {/* open modal */}
      {/* <Button onClick={() => openModal()}>Open Modal</Button> */}
      {isOpen && (
        <Modal
          closeModal={closeModal}
          handleKeyDown={handleKeyDown}
          handleBackdropClick={handleBackdropClick}
        >
          {!isMobile && (
            <Box position="absolute" top="0" right="0" zIndex="100">
              {hasBtnClose && (
                <Button
                  type="button"
                  onClick={closeModal}
                  aria-label="close modal"
                >
                  <IoIosClose size="20px" />
                </Button>
              )}
            </Box>
          )}

          <DailyCaloriesIntake />
        </Modal>
      )}
    </>
  );
}

export default MainPage;
