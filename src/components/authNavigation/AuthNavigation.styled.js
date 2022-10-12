import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
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
  margin-left: auto;

  @media ${device.desktop} {
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
  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.accent};
    transition: color ${p => p.theme.animation.cubic};
  }
  @media ${device.desktop} {
    align-items: flex-end;
    height: 32px;
  }
`;

export const AccentLink = styled(LinkStyled)`
  color: ${({ theme }) => theme.colors.text.secondaryText};
  margin-right: 16px;
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
  @media ${device.desktop} {
    &::before {
      content: '';
      height: 32px;
      width: 2px;
      margin-right: 20px;
      background-color: ${({ theme }) => theme.colors.border};
    }
  }
`;
