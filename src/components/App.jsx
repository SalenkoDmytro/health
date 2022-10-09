import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Loader from './Loader';
import NotFound from 'page/notFoundPage/NotFound';
import Header from './header';


const MainPage = lazy(() => import('page/mainPage'));
const DiaryPage = lazy(() => import('page/diaryPage'));
const CalculatorPage = lazy(() => import('page/calculatorPage'));
const LoginPage = lazy(() => import('page/loginPage'));
const RegistrationPage = lazy(() => import('page/registrationPage'));

export default function App() {
  return (
    <>
      <Header />

      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/diary" element={<DiaryPage />} />
          <Route path="/calculator" element={<CalculatorPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/registration" element={<RegistrationPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
}
