import DailyCaloriesForm from 'components/dailyCaloriesForm/DailyCaloriesForm';
import DailyCaloriesIntake from 'components/dailyCaloriesIntake/DailyCaloriesIntake';
// import Button from 'components/common/button/Button';
import Modal from 'components/common/modal/Modal';
import useToggleModal from 'hooks/toggleModal';
import useMatchMedia from 'hooks/useMatchMedia';
import UserInfo from 'components/userInfo';

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
    </>
  );
}

export default MainPage;
