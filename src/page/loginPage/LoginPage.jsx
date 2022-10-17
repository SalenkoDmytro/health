import React from 'react';
import LoginForm from 'components/loginForm/LoginForm';
import { Container } from '../../components/common/container/Container';
import PictureFruit from '../../components/common/picture/PictureFruit';

function LoginPage() {
  return (
    <>
      <Container>
        <LoginForm />
      </Container>
      <PictureFruit />
    </>
  );
}

export default LoginPage;
