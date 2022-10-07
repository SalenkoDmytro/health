import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainPage from 'page/mainPage';
import DiaryPage from 'page/diaryPage';
import CalculatorPage from 'page/calculatorPage';
import LoginPage from 'page/loginPage';
import RegistrationPage from 'page/registrationPage';
import AppBar from 'components/appBar';
import Logo from 'components/logo';
import UserInfo from 'components/userInfo/UserInfo';

export default function App() {
  return (
    <>
      <header>
        <Logo />
        <AppBar />
        <UserInfo />
      </header>
      <content>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/diary" element={<DiaryPage />} />
          <Route path="/calculator" element={<CalculatorPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/registration" element={<RegistrationPage />} />
        </Routes>
      </content>
    </>
  );
}
