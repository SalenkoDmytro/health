import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import {
  selectIsLoggedIn /*  selectisRegistered */,
} from '../redux/auth/authSelectors';

const PublicRouter = ({ children, restricted = false, redirectTo = '/' }) => {
  const { pathname } = useLocation();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  // const isRegistered = useSelector(selectisRegistered);
  const isRegistrationPage = pathname === '/registration';
  const shouldRedirect =
    isRegistrationPage /* && isRegistered */ || (isLoggedIn && restricted);
  return shouldRedirect ? <Navigate to={redirectTo} /> : children;
};

export default PublicRouter;
