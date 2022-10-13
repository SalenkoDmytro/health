import { lazy, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
// import Loader from './Loader';
import NotFound from 'page/notFoundPage/NotFound';
// import Header from './header';
// import Footer from './footer';
// import useToggleModal from 'hooks/toggleModal';

import PublicRouter from '../utils/PublicRouter';
import PrivateRoute from '../utils/PrivateRoute';
import Layout from './layout/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { selectAccessToken } from 'redux/auth/authSelectors';
import { getUser } from 'redux/user/userOperations';

import { resetStateDailySlice } from 'redux/daily/dailySlice';
import { resetStateDaySlice } from 'redux/day/daySlice';
import { resetStateUserSlice } from 'redux/user/userSlice';
import { resetStateProductSlice } from 'redux/productSearch/productSearchSlice';

const MainPage = lazy(() => import('page/mainPage'));
const DiaryPage = lazy(() => import('page/diaryPage'));
const CalculatorPage = lazy(() => import('page/calculatorPage'));
const LoginPage = lazy(() => import('page/loginPage'));
const RegistrationPage = lazy(() => import('page/registrationPage'));

export default function App() {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectAccessToken);
  // const {
  //   isOpen,
  //   openModal,
  //   hasBtnClose = true,
  //   toggleModal,
  //   closeModal,
  //   handleKeyDown,
  //   handleBackdropClick,
  // } = useToggleModal();

  // let isOpen;
  // const getIsOpen = data => {
  //   isOpen = data;
  // };

  useEffect(() => {
    if (isAuth) {
      dispatch(resetStateProductSlice());
      dispatch(resetStateUserSlice());
      dispatch(resetStateDaySlice());
      dispatch(resetStateDailySlice());
      dispatch(getUser());
    }
  }, [dispatch, isAuth]);

  return (
    <>
      {/* <Header /> */}

      {/* <Suspense fallback={<Loader />}> */}
      <Routes>
        <Route
          path="/"
          element={
            <Layout
            // isOpen={isOpen}
            // toggleModal={toggleModal}
            // openModal={openModal}
            // hasBtnClose={hasBtnClose}
            // closeModal={closeModal}
            // handleKeyDown={handleKeyDown}
            // handleBackdropClick={handleBackdropClick}
            />
          }
        >
          <Route
            index
            element={
              <PublicRouter>
                <MainPage
                // isOpen={isOpen}
                // openModal={openModal}
                // hasBtnClose={hasBtnClose}
                // closeModal={closeModal}
                // handleKeyDown={handleKeyDown}
                // handleBackdropClick={handleBackdropClick}
                />
              </PublicRouter>
            }
          />
          <Route
            path="/registration"
            element={
              <PublicRouter restricted redirectTo="/login">
                <RegistrationPage />
              </PublicRouter>
            }
          />
          <Route
            path="/login"
            element={
              <PublicRouter restricted redirectTo="/calculator">
                <LoginPage />
              </PublicRouter>
            }
          />
          <Route
            path="/diary"
            element={
              <PrivateRoute>
                <DiaryPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/calculator"
            element={
              <PrivateRoute>
                <CalculatorPage />
              </PrivateRoute>
            }
          />
          <Route
            path="*"
            element={
              <PublicRouter>
                <NotFound />
              </PublicRouter>
            }
          />
        </Route>
      </Routes>
      {/* </Suspense> */}
      {/* <Footer /> */}
    </>
  );
}
