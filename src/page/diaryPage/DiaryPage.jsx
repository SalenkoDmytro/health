import React, { useEffect } from 'react';
import DiaryProductsList from '../../components/diaryProductsList/DiaryProductsList';
import DailyCaloriesForm from '../../components/dailyCaloriesForm/DailyCaloriesForm';
import DiaryDateСalendar from 'components/diaryDateСalendar/DiaryDateСalendar';
import RightSideBar from 'components/rightSideBar/RightSideBar';
import { useDispatch, useSelector } from 'react-redux';
import { productSearch } from '../../redux/productSearch/productSearchOperations';
import { selectProduct } from '../../redux/productSearch/productSearchSelectors';
import { paddingLeft } from 'styled-system';
import s from './diaryPage.module.css';

function DiaryPage() {
  const product = useSelector(selectProduct);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(productSearch('хлеб'));
  }, [dispatch]);
  console.log('product', product);
  return (
    <div className={s.Wrapper}>
      <div className={s.LeftPart}>
        <DiaryDateСalendar />
        <DailyCaloriesForm />
        <DiaryProductsList />
      </div>
      <div className={s.RightPart}>
        <RightSideBar />
      </div>
    </div>
  );
}

export default DiaryPage;
