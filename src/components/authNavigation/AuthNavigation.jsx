import React from 'react';
import { LinkStyled, List, AccentLink, Li } from './AuthNavigation.styled';

function AuthNavigation() {
  return (
    <List>
      <Li>
        <AccentLink to="login">Вход</AccentLink>
      </Li>
      <Li>
        <LinkStyled to="register">Регистрация</LinkStyled>
      </Li>
    </List>
  );
}

export default AuthNavigation;
