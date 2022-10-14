import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//Redux
import { selectIsLoggedIn } from 'redux/auth/authSelectors';
import { addDayInfo } from 'redux/day/dayOperations';
import { selectEatenProducts, selectDayId } from 'redux/day/daySelectors';

// import Loader from 'components/Loader.jsx';
import { selectUser } from 'redux/user/userSelectors';

import DiaryProductsList from 'components/diaryProductsList/DiaryProductsList';
import DiaryDateСalendar from 'components/diaryDateСalendar/DiaryDateСalendar';
import DiaryAddProductForm from 'components/diaryAddProductForm';
import RightSideBar from 'components/rightSideBar/RightSideBar';
import Header from 'components/header/Header';
import Footer from 'components/footer/Footer';
// Styled
import { DiaryBox, Diary } from './DiaryPage.styled';
import { SideBar } from 'components/rightSideBar/RightSideBar.styled';

import { selectUserInfo } from 'redux/userData/userDataSelectors';
import { getUserInfo } from 'redux/userData/userDataOperation';
import {
  dailyRateUnauthorized,
  dailyRateAuthorized,
} from 'redux/daily/dailyOperations';

function DiaryPage() {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsLoggedIn);
  // const userData = useSelector(getUser);

  // const eatenProducts = useSelector(selectEatenProducts);
  // const dayId = useSelector(selectDayId);

  // const [date, setDate] = useState(new Date());

  // const user = useSelector(selectUser);
  // console.log('DiaryPage', user);

  //!checked

  // Selectors

  const userInfo = useSelector(selectUserInfo);
  console.log('🚀 ~ DiaryPage ~ userInfo', userInfo);

  useEffect(() => {
    dispatch(getUserInfo());

    if (true) {
      dispatch(
        dailyRateUnauthorized({
          weight: 130,
          height: 150,
          age: 50,
          desiredWeight: 60,
          bloodType: 1,
        })
      );
    } else {
      // dispatch(
      //   dailyRateAuthorized({
      //     weight: 130,
      //     height: 180,
      //     age: 30,
      //     desiredWeight: 60,
      //     bloodType: 1,
      //   })
      // );
    }

    console.log('🚀 ~ DiaryPage ~ userInfo', userInfo);

    //   if (isAuth /* && !userData */) {
    //     // dispatch(getUser());
    //     dispatch(addDayInfo({ date: date.toISOString().split('T')[0] }));
    //   }
    // }, [date, dispatch, isAuth]);

    // const getDate = (date = new Date()) => {
    //   setDate(date);
  }, [dispatch, isAuth, userInfo]);

  return (
    <>
      <div>Dairy</div>
      {/*       <Header />
      <DiaryBox>
        <Diary>
          <DiaryDateСalendar getDate={getDate} startDate={date} />
          <DiaryAddProductForm date={date} />
          <DiaryProductsList dayId={dayId} eatenProducts={eatenProducts} />
        </Diary>
        <SideBar>
          <RightSideBar date={date} />
        </SideBar>
      </DiaryBox>
      <Footer /> */}
    </>
  );
}

export default DiaryPage;
