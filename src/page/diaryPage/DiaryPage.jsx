import React, { useEffect } from 'react';
// import DiaryProductsList from '../../components/diaryProductsList/DiaryProductsList';
// import DailyCaloriesForm from '../../components/dailyCaloriesForm/DailyCaloriesForm';
// import DiaryDateCalendar from '../../components/diaryDateCalendar/DiaryDateCalendar';
import { useDispatch, useSelector } from 'react-redux';
import { productSearch } from '../../redux/productSearch/productSearchOperations';
import { selectProduct } from '../../redux/productSearch/productSearchSelectors';

function DiaryPage() {
  const product = useSelector(selectProduct);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(productSearch('хлеб'))
  }, [dispatch]);
  console.log('product',product);
  return (
    <>
      {/* <DiaryDateСalendar />
      <DailyCaloriesForm />
      <DiaryProductsList /> */}
    </>
  );
}

export default DiaryPage;
