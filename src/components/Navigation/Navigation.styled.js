import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
`;

export const NavLinks = styled(NavLink)`
  font-family: 'Gotham Pro';
  font-weight: 700;
  font-size: 14px;
  line-height: 1.07;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #9b9faa;
`;

export const AccentLink = styled(NavLinks)`
  color: #212121;
  margin-right: 16px;
`;

export const Button = styled.button`
  margin-left: auto;
  background-color: transparent;
  border: none;
`;
