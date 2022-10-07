import React from 'react';
import DiaryProductsList from '../../components/diaryProductsList/DiaryProductsList';
import DailyCaloriesForm from '../../components/dailyCaloriesForm/DailyCaloriesForm';
import DiaryDateСalendar from '../../components/diaryDateСalendar/DiaryDateСalendar';

function DiaryPage() {
  return (
    <>
      <DiaryDateСalendar/>
      <DailyCaloriesForm/>
      <DiaryProductsList/>
  </>
  );
}

export default DiaryPage;
