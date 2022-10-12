import DailyCaloriesForm from 'components/dailyCaloriesForm/DailyCaloriesForm';
import DailyCaloriesIntake from 'components/dailyCaloriesIntake/DailyCaloriesIntake';
// import Button from 'components/common/button/Button';
import Modal from 'components/common/modal/Modal';
import useToggleModal from 'hooks/toggleModal';
import useMatchMedia from 'hooks/useMatchMedia';
import UserInfo from 'components/userInfo';
import PictureFruit from '../../components/common/picture/PictureFruit';
import { Container } from '../../components/common/container/Container';

function MainPage() {
  const {
    isOpen,
    openModal,
    // toggleModal,
    closeModal,
    handleKeyDown,
    handleBackdropClick,
  } = useToggleModal();
  const { isDesktop, isTablet, isMobile } = useMatchMedia();

  return (
    <>
      <Container>
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
            <DailyCaloriesIntake />
          </Modal>
        )}
      </Container>
      <PictureFruit/>
    </>
  );
}

export default MainPage;
