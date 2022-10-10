import React, { useEffect } from 'react';
import DiaryAddProductForm from 'components/diaryAddProductForm';
import DiaryProductsList from 'components/diaryProductsList';
// import DailyCaloriesForm from 'components/dailyCaloriesForm';
// import DiaryDateCalendar from '../../components/diaryDateCalendar/DiaryDateCalendar';
import { useDispatch, useSelector } from 'react-redux';
import { productSearch } from '../../redux/productSearch/productSearchOperations';
// import { selectProduct } from '../../redux/productSearch/productSearchSelectors';
import { getUser } from 'redux/user/userOperations';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';
import { getUserData } from 'redux/user/userSelectors';

function DiaryPage() {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsLoggedIn);
  const userData = useSelector(getUserData);

  useEffect(() => {
    if (isAuth && !userData) {
      dispatch(getUser());
      console.log('isAuth1', isAuth);
    }
  }, [dispatch, isAuth, userData]);
  // const product = useSelector(selectProduct);
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(productSearch('хлеб'))
  // }, [dispatch]);
  // console.log('product',product);
  return (
    <>
      {/* <DiaryDateСalendar /> */}
      {/* <DailyCaloriesForm /> */}
      <DiaryAddProductForm />
      <DiaryProductsList />
    </>
  );
}

export default DiaryPage;
