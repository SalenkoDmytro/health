import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { selectIsLoggedIn } from '../redux/auth/authSelectors';

const PublicRoute = () => {
  const isUserLogin = useSelector(selectIsLoggedIn);

  if (isUserLogin) {
    return <Navigate to="/calculator" />;
  }
  return <Outlet />;
};

export default PublicRoute;
