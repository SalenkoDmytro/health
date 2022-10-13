import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectIsLoggedIn } from 'redux/auth/authSelectors';
import { getUserData } from 'redux/user/userSelectors';
import { addDayInfo } from 'redux/day/dayOperations';
import { selectEatenProducts, selectDayId } from 'redux/day/daySelectors';

import DiaryProductsList from 'components/diaryProductsList/DiaryProductsList';
import DiaryDateСalendar from 'components/diaryDateСalendar/DiaryDateСalendar';
import DiaryAddProductForm from 'components/diaryAddProductForm';
import RightSideBar from 'components/rightSideBar/RightSideBar';
import Box from 'components/common/box';

import { getUser } from 'redux/user/userOperations';
import PictureLeaf from 'components/common/picture/PictureLeaf';
import { Container } from 'components/common/container/Container';

function DiaryPage() {
  const [date, setDate] = useState(new Date());
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsLoggedIn);
  const userData = useSelector(getUserData);
  const eatenProducts = useSelector(selectEatenProducts);
  const dayId = useSelector(selectDayId);

  useEffect(() => {
    if (isAuth && !userData) {
      dispatch(getUser());
      // console.log('isAuth1', isAuth);
    }
  }, [dispatch, isAuth, userData]);

  useEffect(() => {
    dispatch(addDayInfo({ date: date.toISOString().split('T')[0] }));
  }, [date, dispatch]);

  const getDate = (date = new Date()) => {
    setDate(date);
  };

  return (
    <>
      <Container>
        <Box display="flex">
          <Box width="60%">
            <DiaryDateСalendar getDate={getDate} startDate={date} />
            <DiaryAddProductForm date={date} />
            <DiaryProductsList dayId={dayId} eatenProducts={eatenProducts} />
          </Box>
          <Box width="40%">
            <RightSideBar date={date} />
          </Box>
        </Box>
      </Container>
      <PictureLeaf />
    </>
  );
}

export default DiaryPage;
