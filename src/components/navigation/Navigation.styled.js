import { NavLink } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { device } from 'utils/device';

const gradient = keyframes`
{
0% {
  background-position: 0 50%;
}
50% {
  background-position: 100% 50%;
}
100% {
  background-position: 0 50%;
}}
`;

export const List = styled.ul`
  display: flex;
  @media ${device.noDesktop} {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
  }
  @media ${device.desktop} {
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

  &.active {
    animation: ${gradient} 8s ease-in-out infinite;
    background: linear-gradient(
      to right,
      ${({ theme }) => theme.colors.accent},
      ${({ theme }) => theme.colors.accent},
      ${({ theme }) => theme.colors.text.primaryText},
      ${({ theme }) => theme.colors.text.secondaryText},
      ${({ theme }) => theme.colors.text.primaryText},
      ${({ theme }) => theme.colors.accent},
      ${({ theme }) => theme.colors.accent}
    );
    background-size: 300%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.accent};
    transition: color ${({ theme }) => theme.animation.cubic};
  }

  @media ${device.tablet} {
    font-size: 24px;
    line-height: ${({ theme }) => theme.lineHeights.text};
  }

  @media ${device.desktop} {
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

  @media ${device.desktop} {
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
