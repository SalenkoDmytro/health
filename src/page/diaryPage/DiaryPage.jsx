import React, { useState, useEffect } from 'react';
import DiaryProductsList from '../../components/diaryProductsList/DiaryProductsList';
// import DailyCaloriesForm from 'components/dailyCaloriesForm';
import DiaryDateСalendar from 'components/diaryDateСalendar/DiaryDateСalendar';
import DiaryAddProductForm from 'components/diaryAddProductForm';
import RightSideBar from 'components/rightSideBar/RightSideBar';
import Box from 'components/common/box';

import { useDispatch, useSelector } from 'react-redux';
import { productSearch } from 'redux/productSearch/productSearchOperations';
import { getUser } from 'redux/user/userOperations';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';
import { getUserData } from 'redux/user/userSelectors';

function DiaryPage() {
  const [date, setDate] = useState(new Date());
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsLoggedIn);
  const userData = useSelector(getUserData);

  useEffect(() => {
    if (isAuth && !userData) {
      dispatch(getUser());
      console.log('isAuth1', isAuth);
    }
  }, [dispatch, isAuth, userData]);

  const getDate = (date = new Date()) => {
    setDate(date);
  };

  return (
    <Box display="flex">
      <Box width="60%" >
        <DiaryDateСalendar getDate={getDate} startDate={date} />
        {/* <DailyCaloriesForm /> */}
        <DiaryAddProductForm date={date} />
        <DiaryProductsList />
      </Box>
      <Box width="40%">
        <RightSideBar date={date} />
      </Box>
    </Box>
  );
}

export default DiaryPage;
