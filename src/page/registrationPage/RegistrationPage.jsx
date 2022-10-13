import React from 'react';
import RegistrationForm from '../../components/registrationForm/RegistrationForm';
import { Container } from '../../components/common/container/Container';
import PictureFruit from '../../components/common/picture/PictureFruit';
import Header from 'components/header/Header';

function RegistrationPage() {
  return (
    <>
      <Header />
      <Container>
        <RegistrationForm />
      </Container>
      <PictureFruit />
    </>
  );
}

export default RegistrationPage;
