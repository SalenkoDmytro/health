import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { selectIsLoggedIn } from '../redux/auth/authSelectors';

const PrivateRoute = () => {
  const isUserLogin = useSelector(selectIsLoggedIn);

  console.log(isUserLogin);

  if (!isUserLogin) {
    return <Navigate to="/login" />;
  }
  return <Outlet />;
};

export default PrivateRoute;
