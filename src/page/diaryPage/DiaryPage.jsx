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
import { getDayInfo } from 'redux/userData/userDataOperation';
import {
  deleteDayProduct,
  addDayProduct,
} from 'redux/userData/userDataOperation';
import { func } from 'prop-types';
function DiaryPage() {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsLoggedIn);
  // const userData = useSelector(getUser);

  // const eatenProducts = useSelector(selectEatenProducts);
  // const dayId = useSelector(selectDayId);

  // const [date, setDate] = useState(new Date());

  // const user = useSelector(selectUser);
  // console.log('DiaryPage', user);
  const date = new Date();
  //!checked

  // Selectors

  function delProduct() {
    dispatch(
      deleteDayProduct({
        dayId: '6344401ee037c408de8539c7',
        eatenProductId: 'fed502be-0695-44fb-9e5d-c555b24f09d8',
      })
    );
  }

  function addProduct() {
    dispatch(
      getDayInfo({
        date: '2020-12-31',
        productId: '9a8e2129-d028-4778-b417-0f02f47eb14d',
        weight: 100,
      })
    );
  }

  const userInfo = useSelector(selectUserInfo);

  useEffect(() => {
    // dispatch(getUserInfo());

    dispatch(getDayInfo({ date: '2020-12-31' }));
    // dispatch(getDayInfo({ date: date.toISOString().split('T')[0] }));

    // if (true) {
    //   dispatch(
    //     dailyRateUnauthorized({
    //       weight: 130,
    //       height: 150,
    //       age: 50,
    //       desiredWeight: 60,
    //       bloodType: 1,
    //     })
    //   );
    // } else {
    //   // dispatch(
    //   //   dailyRateAuthorized({
    //   //     weight: 130,
    //   //     height: 180,
    //   //     age: 30,
    //   //     desiredWeight: 60,
    //   //     bloodType: 1,
    //   //   })
    //   // );
    // }

    console.log('🚀 ~ DiaryPage ~ userInfo', userInfo);

    //   if (isAuth /* && !userData */) {
    //     // dispatch(getUser());
    //     dispatch(addDayInfo({ date: date.toISOString().split('T')[0] }));
    //   }
    // }, [date, dispatch, isAuth]);

    // const getDate = (date = new Date()) => {
    //   setDate(date);
  }, [date, dispatch, isAuth, userInfo]);

  return (
    <>
      <div>Dairy</div>
      <button onClick={() => delProduct()}>Удалить</button>
      <button onClick={() => addProduct()}>Добавить</button>

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
