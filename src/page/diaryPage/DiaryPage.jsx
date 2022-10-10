import React, { useState } from 'react';
import DiaryProductsList from '../../components/diaryProductsList/DiaryProductsList';
import DailyCaloriesForm from '../../components/dailyCaloriesForm/DailyCaloriesForm';
import DiaryDateСalendar from 'components/diaryDateСalendar/DiaryDateСalendar';
import RightSideBar from 'components/rightSideBar/RightSideBar';
import s from './diaryPage.module.css';
import Box from 'components/common/box';
import { flex } from 'styled-system';

function DiaryPage() {
  const [date, setDate] = useState(new Date());

  const getDate = (date = new Date()) => {
    setDate(date);
  };

  console.log(date);
  return (
    <Box display="flex">
      <Box width="60%" ml="9%">
        <DiaryDateСalendar getDate={getDate} startDate={date} />
        <DailyCaloriesForm />
        <DiaryProductsList />
      </Box>
      <Box width="40%">
        <RightSideBar date={date} />
      </Box>
    </Box>
  );
}

export default DiaryPage;
