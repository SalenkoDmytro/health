import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAccessToken } from 'redux/auth/authSelectors';
import AppRoutes from 'Routes/Routes';
import { getUserInfo } from 'redux/userData/userDataOperation';

export default function App() {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectAccessToken);

  useEffect(() => {
    if (isAuth) {
      dispatch(getUserInfo());
    }
  }, [dispatch, isAuth]);

  return (
    <>
      <AppRoutes />
    </>
  );
}
