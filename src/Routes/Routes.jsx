import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import PublicRoute from 'utils/PublicRouter';
import PrivateRoute from 'utils/PrivateRoute';
import NotFound from 'page/notFoundPage/NotFound';
import Loader from 'components/Loader';

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
        <Route path="/" element={<MainPage />} />
        {/* Public routes */}
        <Route element={<PublicRoute />}>
          <Route path="/registration" element={<RegistrationPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Route>
        {/* Private routes */}
        <Route element={<PrivateRoute />}>
          <Route path="/diary" element={<DiaryPage />} />
          <Route path="/calculator" element={<CalculatorPage />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
