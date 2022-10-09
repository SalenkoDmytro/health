import React from 'react';
import useMatchMedia from 'hooks/useMatchMedia';
import { useSearchParams } from 'react-router-dom';
import { LinkStyled, List, AccentLink, Li } from './AuthNavigation.styled';

function AuthNavigation() {
  // const { isDesktop } = useMatchMedia();
  // const [searchParams] = useSearchParams();
  // const login = searchParams.get('login');
  // const registration = searchParams.get('registration');

  return (
    <>
      <List>
        <Li>
          <AccentLink to="login">Вход</AccentLink>
        </Li>
        <Li>
          <LinkStyled to="registration">Регистрация</LinkStyled>
        </Li>
      </List>
    </>
  );
}

export default AuthNavigation;
