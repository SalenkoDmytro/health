import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const List = styled.ul`
  display: flex;
  margin-left: auto;
`;
export const Li = styled.li`
  display: flex;
  align-items: center;
`;

export const LinkStyled = styled(Link)`
  display: flex;
  justify-content: center;
  font-family: 'Gotham Pro';
  font-weight: 700;
  font-size: 14px;
  line-height: 1.07;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #9b9faa;
`;

export const AccentLink = styled(LinkStyled)`
  color: #212121;
  margin-right: 16px;
`;
