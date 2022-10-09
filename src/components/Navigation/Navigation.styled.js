import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  @media (max-width: 1199px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
  }
  @media (min-width: 1200px) {
    margin-left: 20px;
  }
`;

export const NavLinks = styled(NavLink)`
  display: block;
  padding: 20px;
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: 18px;
  line-height: ${({ theme }) => theme.lineHeights.title};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.white};
  letter-spacing: ${({ theme }) => theme.letterSpacing.l};
  text-transform: ${({ theme }) => theme.textTransform.upCase};

  @media (min-width: 768px) {
    font-size: 24px;
    line-height: ${({ theme }) => theme.lineHeights.text};
  }

  @media (min-width: 1200px) {
    display: flex;
    align-items: flex-end;
    height: 32px;
    padding: 0;
    font-family: ${({ theme }) => theme.fonts.heading};
    font-size: ${({ theme }) => theme.fontSizes.s};
    line-height: ${({ theme }) => theme.lineHeights.nav};
    color: ${({ theme }) => theme.colors.text.primaryText};
  }
`;

export const AccentLink = styled(NavLinks)`
  color: ${({ theme }) => theme.colors.text.primaryText};
  margin-bottom: 50px;

  @media (min-width: 1200px) {
    color: ${({ theme }) => theme.colors.text.secondaryText};
    margin-bottom: 0;
    margin-right: 16px;

    &::before {
      content: '';
      height: 32px;
      width: 2px;
      margin-right: 20px;
      background-color: ${({ theme }) => theme.colors.border};
    }
  }
`;
