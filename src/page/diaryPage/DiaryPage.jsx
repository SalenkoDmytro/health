import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAccessToken } from 'redux/auth/authSelectors';
import useMatchMedia from 'hooks/useMatchMedia';

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

import PictureLeaf from 'components/common/picture/PictureLeaf';
import { Container } from 'components/common/container/Container';

import Modal from 'components/common/modal/Modal';

function DiaryPage({ openModal, isOpen }) {
  const { isMobile, isTablet, isDesktop } = useMatchMedia();

  const dispatch = useDispatch();
  const isAuth = useSelector(selectAccessToken);
  const eatenProducts = useSelector(selectUDEatenProducts);
  const dayId = useSelector(selectUDDayId);
  let yourDate = new Date();
  let formatDate;
  const offset = yourDate.getTimezoneOffset();
  yourDate = new Date(yourDate.getTime() - offset * 60 * 1000);
  formatDate = yourDate.toISOString().split('T')[0];

  const [date, setDate] = useState(formatDate);

  useEffect(() => {
    if (isAuth) {
      dispatch(getDayInfo({ date: date }));
    }
  }, [date, dispatch, isAuth]);

  const getDate = date => {
    setDate(date);
  };

  return (
    <>
      <DiaryBox>
        <Diary>
          <Container>
            {isMobile && !isOpen && (
              <DiaryDateCalendar
                formatDate={formatDate}
                getDate={getDate}
                startDate={date}
              />
            )}
            {isTablet && (
              <DiaryDateCalendar
                formatDate={formatDate}
                getDate={getDate}
                startDate={date}
              />
            )}
            {isDesktop && (
              <DiaryDateCalendar
                formatDate={formatDate}
                getDate={getDate}
                startDate={date}
              />
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

        {isMobile && !isOpen && (
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
        )}
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
    </>
  );
}

export default DiaryPage;
