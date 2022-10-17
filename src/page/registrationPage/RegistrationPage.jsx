import React from 'react';
import RegistrationForm from '../../components/registrationForm/RegistrationForm';
import { Container } from '../../components/common/container/Container';
import PictureFruit from '../../components/common/picture/PictureFruit';

function RegistrationPage() {
  return (
    <>
      <Container>
        <RegistrationForm />
      </Container>
      <PictureFruit />
    </>
  );
}

export default RegistrationPage;
