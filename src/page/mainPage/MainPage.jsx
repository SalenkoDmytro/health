import DailyCaloriesForm from 'components/dailyCaloriesForm/DailyCaloriesForm';
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
      <DailyCaloriesForm />
      {/* open modal */}
      <Button onClick={() => openModal()}>Open Modal</Button>
      {isOpen && (
        <Modal
          closeModal={closeModal}
          handleKeyDown={handleKeyDown}
          handleBackdropClick={handleBackdropClick}
        >
          <h1>MODAL Window</h1>
          <p>My text</p>
        </Modal>
      )}
    </>
  );
}

export default MainPage;
