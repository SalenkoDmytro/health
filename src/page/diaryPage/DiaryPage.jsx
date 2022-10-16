import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';
import useMatchMedia from 'hooks/useMatchMedia';
import useToggleModal from 'hooks/toggleModal';

import { getDayInfo } from 'redux/userData/userDataOperation';
import {
  selectUDDayId,
  selectUDEatenProducts,
} from 'redux/userData/userDataSelectors';

// import Header from 'components/header/Header';
// import Footer from 'components/footer/Footer';

// import Loader from 'components/Loader.jsx';
import DiaryProductsList from 'components/diaryProductsList/DiaryProductsList';
import DiaryDateCalendar from 'components/diaryDateСalendar/DiaryDateСalendar';
import DiaryAddProductForm from 'components/diaryAddProductForm';
import RightSideBar from 'components/rightSideBar/RightSideBar';

import { DiaryBox, Diary, Button } from './DiaryPage.styled';
import { SideBar } from 'components/rightSideBar/RightSideBar.styled';
// import { PictureLeafStyled } from 'components/common/picture/PictureLeaf.styled';
import PictureLeaf from 'components/common/picture/PictureLeaf';
import { Container } from 'components/common/container/Container';

import UserInfo from 'components/userInfo';
import Modal from 'components/common/modal/Modal';

function DiaryPage({ openModal, isOpen }) {
  const { isMobile, isTablet, isDesktop } = useMatchMedia();

  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsLoggedIn);
  const eatenProducts = useSelector(selectUDEatenProducts);
  const dayId = useSelector(selectUDDayId);
  const [date, setDate] = useState(new Date());
  // const {
  //   isOpen,
  //   // openModal,
  //   hasBtnClose = true,
  //   // toggleModal,
  //   closeModal,
  //   handleKeyDown,
  //   handleBackdropClick,
  // } = useToggleModal();

  useEffect(() => {
    if (isAuth) {
      dispatch(getDayInfo({ date: date.toISOString().split('T')[0] }));
    }
  }, [date, dispatch, isAuth]);

  const getDate = date => {
    setDate(date);
  };

  return (
    <>
      {/* <Header /> */}
      {/* {isMobile && isOpen && (
        <UserInfo closeModal={closeModal} isOpen={isOpen} />
      )} */}
      <DiaryBox>
        <Diary>
          <Container>
            {/* <DiaryDateCalendar getDate={getDate} startDate={date} />
            {!isMobile && <DiaryAddProductForm date={date} />}
            <DiaryProductsList
              dayId={dayId}
              eatenProducts={eatenProducts}
              openModal={openModal}
            /> */}
            {isMobile && !isOpen && (
              <DiaryDateCalendar getDate={getDate} startDate={date} />
            )}
            {isTablet && (
              <DiaryDateCalendar getDate={getDate} startDate={date} />
            )}
            {isDesktop && (
              <DiaryDateCalendar getDate={getDate} startDate={date} />
            )}
            {!isMobile && <DiaryAddProductForm date={date} />}
            {isMobile && !isOpen && (
              <DiaryProductsList
                dayId={dayId}
                eatenProducts={eatenProducts}
                openModal={openModal}
              />
            )}
            {isTablet && (
              <DiaryProductsList
                dayId={dayId}
                eatenProducts={eatenProducts}
                openModal={openModal}
              />
            )}
            {isDesktop && (
              <DiaryProductsList
                dayId={dayId}
                eatenProducts={eatenProducts}
                openModal={openModal}
              />
            )}
          </Container>
        </Diary>
        {/* {isMobile && !isOpen && (
          <SideBar>
            <Container>
              <RightSideBar date={date} />
            </Container>
          </SideBar>
        )}
        {isTablet && (
          <SideBar>
            <Container>
              <RightSideBar date={date} />
            </Container>
          </SideBar>
        )}
        {isDesktop && (
          <SideBar>
            <Container>
              <RightSideBar date={date} />
            </Container>
          </SideBar>
        )} */}
      </DiaryBox>
      {isMobile && !isOpen && <PictureLeaf />}
      {isTablet && <PictureLeaf />}
      {isDesktop && <PictureLeaf />}
      {isOpen && (
        <Modal
        // closeModal={closeModal}
        // handleKeyDown={handleKeyDown}
        // handleBackdropClick={handleBackdropClick}
        >
          <Container>
            <DiaryAddProductForm date={date} />
          </Container>
        </Modal>
      )}

      {/* <PictureLeafStyled /> */}
      {/* <Footer /> */}
    </>
  );
}

export default DiaryPage;
