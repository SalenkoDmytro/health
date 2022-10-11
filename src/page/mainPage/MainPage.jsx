import DailyCaloriesForm from 'components/dailyCaloriesForm/DailyCaloriesForm';
import DailyCaloriesIntake from 'components/dailyCaloriesIntake/DailyCaloriesIntake';
import Button from 'components/common/button/Button';
import Modal from 'components/common/modal/Modal';
import useToggleModal from 'hooks/toggleModal';

function MainPage() {
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
      <DailyCaloriesForm openModal={openModal} />
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
