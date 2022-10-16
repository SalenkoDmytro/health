import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import PublicRouter from 'Routes/PublicRouter';
import PrivateRouter from 'Routes/PrivateRoute';

import NotFound from 'page/notFoundPage/NotFound';
import Loader from 'components/Loader';
import Layout from 'components/layout/Layout';
import useToggleModal from 'hooks/toggleModal';

const MainPage = lazy(() => import('page/mainPage/MainPage'));
const DiaryPage = lazy(() => import('page/diaryPage/DiaryPage'));
const CalculatorPage = lazy(() => import('page/calculatorPage/CalculatorPage'));
const LoginPage = lazy(() => import('page/loginPage/LoginPage'));
const RegistrationPage = lazy(() =>
  import('page/registrationPage/RegistrationPage')
);

const AppRoutes = () => {
  const { isOpen, openModal, closeModal, handleKeyDown, handleBackdropClick } =
    useToggleModal();
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route
          path="/"
          element={<Layout closeModal={closeModal} isOpen={isOpen} />}
        >
          <Route
            index
            element={
              <MainPage
                isOpen={isOpen}
                openModal={openModal}
                handleKeyDown={handleKeyDown}
                handleBackdropClick={handleBackdropClick}
                closeModal={closeModal}
              />
            }
          />
          {/* Public routes */}
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
          {/* Private routes */}
          <Route element={<PrivateRouter />}>
            <Route
              path="/diary"
              element={<DiaryPage openModal={openModal} isOpen={isOpen} />}
            />
            <Route path="/calculator" element={<CalculatorPage />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
