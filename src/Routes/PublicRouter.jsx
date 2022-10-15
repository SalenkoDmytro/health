import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { selectIsLoggedIn } from '../redux/auth/authSelectors';

const PublicRouter = ({ children, restricted = false, redirectTo = '/' }) => {
  const { pathname } = useLocation();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRegistrationPage = pathname === '/registration';
  const shouldRedirect = isRegistrationPage || (isLoggedIn && restricted);
  return shouldRedirect ? <Navigate to={redirectTo} /> : children;
};

export default PublicRouter;
