import React, { useState, useEffect } from 'react';
import DiaryProductsList from '../../components/diaryProductsList/DiaryProductsList';
// import DailyCaloriesForm from 'components/dailyCaloriesForm';
import DiaryDateСalendar from 'components/diaryDateСalendar/DiaryDateСalendar';
import DiaryAddProductForm from 'components/diaryAddProductForm';
import RightSideBar from 'components/rightSideBar/RightSideBar';
import Box from 'components/common/box';

import { useDispatch, useSelector } from 'react-redux';
import { getUser } from 'redux/user/userOperations';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';
import { getUserData } from 'redux/user/userSelectors';
import { addDayInfo } from 'redux/day/dayOperations';
import { selectDayInfo } from 'redux/day/daySelectors';
function DiaryPage() {
  const [date, setDate] = useState(new Date());
  const dayInfo = useSelector(selectDayInfo);
  // const dayInfo = {};
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsLoggedIn);
  const userData = useSelector(getUserData);
  useEffect(() => {
    if (isAuth && !userData) {
      dispatch(getUser());
      console.log('isAuth1', isAuth);
    }
  }, [dispatch, isAuth, userData]);

  useEffect(() => {
    dispatch(addDayInfo({ date: date.toISOString().split('T')[0] }));
  }, [date, dispatch]);

  const getDate = (date = new Date()) => {
    setDate(date);
  };

  return (
    <Box display="flex">
      <Box width="60%" ml="9%">
        <DiaryDateСalendar getDate={getDate} startDate={date} />
        {/* <DailyCaloriesForm /> */}
        <DiaryAddProductForm date={date} />
        <DiaryProductsList dayInfo={dayInfo} />
      </Box>
      <Box width="40%">
        <RightSideBar date={date} />
      </Box>
    </Box>
  );
}

export default DiaryPage;
