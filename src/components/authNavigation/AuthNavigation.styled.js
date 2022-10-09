import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const List = styled.ul`
  display: flex;
  margin-left: auto;

  @media (min-width: 1200px) {
    margin-left: 20px;
  }
`;
export const Li = styled.li`
  display: flex;
  align-items: center;
`;

export const LinkStyled = styled(Link)`
  display: flex;
  font-family: ${({ theme }) => theme.fonts.heading};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: ${({ theme }) => theme.fontSizes.s};
  line-height: ${({ theme }) => theme.lineHeights.nav};
  letter-spacing: ${({ theme }) => theme.letterSpacing.l};
  text-transform: ${({ theme }) => theme.textTransform.upCase};
  color: ${({ theme }) => theme.colors.text.primaryText};
  @media (min-width: 1200px) {
    align-items: flex-end;
    height: 32px;
  }
`;

export const AccentLink = styled(LinkStyled)`
  color: ${({ theme }) => theme.colors.text.secondaryText};
  margin-right: 16px;
  @media (min-width: 1200px) {
    &::before {
      content: '';
      height: 32px;
      width: 2px;
      margin-right: 20px;
      background-color: ${({ theme }) => theme.colors.border};
    }
  }
`;
