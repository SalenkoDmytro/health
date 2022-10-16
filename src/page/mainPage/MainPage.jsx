import DailyCaloriesForm from 'components/dailyCaloriesForm/DailyCaloriesForm';
import DailyCaloriesIntake from 'components/dailyCaloriesIntake/DailyCaloriesIntake';
import Modal from 'components/common/modal/Modal';
import useMatchMedia from 'hooks/useMatchMedia';
import Box from 'components/common/box';
import { IoIosClose } from 'react-icons/io';
import { Button } from './MainPage.styled';
import PictureFruit from '../../components/common/picture/PictureFruit';
import { Container } from '../../components/common/container/Container';

function MainPage({
  isOpen,
  openModal,
  closeModal,
  handleKeyDown,
  handleBackdropClick,
}) {
  const hasBtnClose = true;

  const { isDesktop, isTablet, isMobile } = useMatchMedia();

  return (
    <>
      <Container>
        {isMobile && !isOpen && <DailyCaloriesForm openModal={openModal} />}
        {isTablet && <DailyCaloriesForm openModal={openModal} />}
        {isDesktop && <DailyCaloriesForm openModal={openModal} />}

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
      </Container>
      {isMobile && !isOpen && <PictureFruit />}
      {isTablet && <PictureFruit />}
      {isDesktop && <PictureFruit />}
    </>
  );
}

export default MainPage;
