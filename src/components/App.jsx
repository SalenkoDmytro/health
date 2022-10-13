import AppRoutes from 'Routes/Routes';

export default function App() {
  // const {
  //   isOpen,
  //   openModal,
  //   hasBtnClose = true,
  //   toggleModal,
  //   closeModal,
  //   handleKeyDown,
  //   handleBackdropClick,
  // } = useToggleModal();

  // let isOpen;
  // const getIsOpen = data => {
  //   isOpen = data;
  // };
  return (
    <>
      {/* <Header /> */}
      {/* <Suspense fallback={<Loader />}> */}
      <AppRoutes />
      {/* </Suspense> */}
      {/* <Footer /> */}
    </>
  );
}
