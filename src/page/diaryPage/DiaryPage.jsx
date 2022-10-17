import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAccessToken } from 'redux/auth/authSelectors';
import useMatchMedia from 'hooks/useMatchMedia';

import { getDayInfo } from 'redux/userData/userDataOperation';
import {
  selectUDDayId,
  selectUDEatenProducts,
} from 'redux/userData/userDataSelectors';

import DiaryProductsList from 'components/diaryProductsList/DiaryProductsList';
import DiaryDateCalendar from 'components/diaryDateСalendar/DiaryDateСalendar';
import DiaryAddProductForm from 'components/diaryAddProductForm';
import RightSideBar from 'components/rightSideBar/RightSideBar';
import Modal from 'components/common/modal/Modal';

import { SideBar } from 'components/rightSideBar/RightSideBar.styled';
import PictureLeaf from 'components/common/picture/PictureLeaf';
import { Container } from 'components/common/container/Container';

import { DiaryBox, Diary } from './DiaryPage.styled';

function DiaryPage({ openModal, isOpen }) {
  const { isMobile } = useMatchMedia();

  const dispatch = useDispatch();
  const isAuth = useSelector(selectAccessToken);
  const eatenProducts = useSelector(selectUDEatenProducts);
  const dayId = useSelector(selectUDDayId);
  let yourDate = new Date(Date.now());
  const offset = yourDate.getTimezoneOffset();
  yourDate = new Date(yourDate.getTime() - offset * 60 * 1000);
  const formatDate = yourDate.toISOString().split('T')[0];
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
      {!isOpen ? (
        <>
          <DiaryBox>
            <Diary>
              <Container>
                <DiaryDateCalendar
                  formatDate={formatDate}
                  getDate={getDate}
                  startDate={date}
                />
                {!isMobile && <DiaryAddProductForm date={date} />}
                <DiaryProductsList
                  dayId={dayId}
                  eatenProducts={eatenProducts}
                  openModal={openModal}
                />
              </Container>
            </Diary>
            <SideBar>
              <Container>
                <RightSideBar date={date} />
              </Container>
            </SideBar>
          </DiaryBox>
          <PictureLeaf />
        </>
      ) : (
        <Modal>
          <Container>
            <DiaryAddProductForm date={date} />
          </Container>
        </Modal>
      )}
    </>
  );
}

export default DiaryPage;
