import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAccessToken } from 'redux/auth/authSelectors';
import { getUser } from 'redux/user/userOperations';
import AppRoutes from 'Routes/Routes';

// import { resetStateDailySlice } from 'redux/daily/dailySlice';
// import { resetStateDaySlice } from 'redux/day/daySlice';
// import { resetStateUserSlice } from 'redux/user/userSlice';
// import { resetStateProductSlice } from 'redux/productSearch/productSearchSlice';

export default function App() {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectAccessToken);

  useEffect(() => {
    if (isAuth) {
      //Взяти юзера і записати стейт
      // dispatch(getUser());
      // const fetchUser = async () => {
      //   try {
      //     const result = await axios(`/user`);
      //     //TODO dispatch
      //     // console.log('🚀 ~ fetchUser ~ result', result.data);
      //     return result;
      //   } catch (err) {
      //     console.log(err);
      //   }
      // };
      // fetchUser();
    }

    // dispatch(resetStateProductSlice());
    // dispatch(resetStateUserSlice());
    // dispatch(resetStateDaySlice());
    // dispatch(resetStateDailySlice());
  }, [dispatch, isAuth]);

  return (
    <>
      <AppRoutes />
    </>
  );
}
