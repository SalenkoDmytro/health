import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import {
  selectIsLoggedIn,
  selectisRegistered,
} from '../redux/auth/authSelectors';

const PublicRoute = () => {
  const isUserLogin = useSelector(selectIsLoggedIn);

  console.log(isUserLogin);

  if (isUserLogin) {
    return <Navigate to="/diary" />;
  }
  return <Outlet />;
};

export default PublicRoute;
