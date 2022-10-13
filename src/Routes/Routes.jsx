import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import PublicRouter from '../utils/PublicRouter';
import PrivateRoute from '../utils/PrivateRoute';
import Layout from 'components/layout/Layout';
import NotFound from 'page/notFoundPage/NotFound';

const MainPage = lazy(() => import('page/mainPage'));
const DiaryPage = lazy(() => import('page/diaryPage'));
const CalculatorPage = lazy(() => import('page/calculatorPage'));
const LoginPage = lazy(() => import('page/loginPage'));
const RegistrationPage = lazy(() => import('page/registrationPage'));

const AppRoutes = () => {
  return (
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
  );
};

export default AppRoutes;
