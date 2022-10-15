import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import PublicRouter from 'Routes/PublicRouter';
import PrivateRouter from 'Routes/PrivateRoute';

import NotFound from 'page/notFoundPage/NotFound';
import Loader from 'components/Loader';
import Layout from 'components/layout/Layout';

const MainPage = lazy(() => import('page/mainPage/MainPage'));
const DiaryPage = lazy(() => import('page/diaryPage/DiaryPage'));
const CalculatorPage = lazy(() => import('page/calculatorPage/CalculatorPage'));
const LoginPage = lazy(() => import('page/loginPage/LoginPage'));
const RegistrationPage = lazy(() =>
  import('page/registrationPage/RegistrationPage')
);

const AppRoutes = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
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
            <Route path="/diary" element={<DiaryPage />} />
            <Route path="/calculator" element={<CalculatorPage />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
