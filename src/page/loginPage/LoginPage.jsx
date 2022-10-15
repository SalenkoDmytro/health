import React from 'react';
import LoginForm from 'components/loginForm/LoginForm';
import { Container } from '../../components/common/container/Container';
import PictureFruit from '../../components/common/picture/PictureFruit';
// import Header from 'components/header/Header';
// import Footer from 'components/footer/Footer';

function LoginPage() {
  return (
    <>
      {/* <Header /> */}
      <Container>
        <LoginForm />
      </Container>
      <PictureFruit />
      {/* <Footer /> */}
    </>
  );
}

export default LoginPage;
