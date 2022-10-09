import React, { useEffect } from 'react';
import DiaryProductsList from '../../components/diaryProductsList/DiaryProductsList';
import DailyCaloriesForm from '../../components/dailyCaloriesForm/DailyCaloriesForm';
import DiaryDateСalendar from 'components/diaryDateСalendar/DiaryDateСalendar';
import RightSideBar from 'components/rightSideBar/RightSideBar';
import { useDispatch, useSelector } from 'react-redux';
import { productSearch } from '../../redux/productSearch/productSearchOperations';
import { selectProduct } from '../../redux/productSearch/productSearchSelectors';
import { paddingLeft } from 'styled-system';

function DiaryPage() {
  const product = useSelector(selectProduct);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(productSearch('хлеб'));
  }, [dispatch]);
  console.log('product', product);
  return (
    <div style={{ display: 'flex' }}>
      <div style={{ width: '60%' }}>
        <DiaryDateСalendar />
        <DailyCaloriesForm />
        <DiaryProductsList />
      </div>
      <div style={{ width: '40%' }}>
        <RightSideBar />
      </div>
    </div>
  );
}

export default DiaryPage;
