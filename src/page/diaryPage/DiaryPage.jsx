import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';
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

import { DiaryBox, Diary } from './DiaryPage.styled';
import { SideBar } from 'components/rightSideBar/RightSideBar.styled';
import { PictureLeafStyled } from 'components/common/picture/PictureLeaf.styled';
import { Container } from 'components/common/container/Container';

function DiaryPage() {
  const { isMobile } = useMatchMedia();
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsLoggedIn);
  const eatenProducts = useSelector(selectUDEatenProducts);
  const dayId = useSelector(selectUDDayId);
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    if (isAuth) {
      dispatch(getDayInfo({ date: date.toISOString().split('T')[0] }));
    }
  }, [date, dispatch, isAuth]);

  const getDate = (date = new Date()) => {
    setDate(date);
  };

  return (
    <>
      {/* <Header /> */}
      <Container>
        <DiaryBox>
          <Diary>
            <DiaryDateCalendar getDate={getDate} startDate={date} />
            {!isMobile && <DiaryAddProductForm date={date} />}
            <DiaryProductsList dayId={dayId} eatenProducts={eatenProducts} />
          </Diary>
          <SideBar>{/* <RightSideBar date={date} /> */}</SideBar>
        </DiaryBox>
      </Container>
      <PictureLeafStyled />
      {/* <Footer /> */}
    </>
  );
}

export default DiaryPage;
