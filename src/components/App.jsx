import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import AppBar from 'components/appBar';
import Logo from 'components/logo';
import UserInfo from 'components/userInfo/UserInfo';
import Loader from './Loader';

const MainPage = lazy(() => import('page/mainPage'));
const DiaryPage = lazy(() => import('page/diaryPage'));
const CalculatorPage = lazy(() => import('page/calculatorPage'));
const LoginPage = lazy(() => import('page/loginPage'));
const RegistrationPage = lazy(() => import('page/registrationPage'));

export default function App() {
  return (
    <>
      <header>
        <Logo />
        <AppBar />
        <UserInfo />
      </header>
        <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/diary" element={<DiaryPage />} />
          <Route path="/calculator" element={<CalculatorPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/registration" element={<RegistrationPage />} />
        </Routes>
        </Suspense>
    </>
  );
}
