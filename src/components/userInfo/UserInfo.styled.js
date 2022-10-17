import styled from 'styled-components';
import { device } from 'utils/device';

export const Wrapper = styled.div`
  display: flex;
  @media ${device.fabletAndMobileOnly} {
    background-color: ${({ theme }) => theme.colors.primaryBackground};
  }
  @media ${device.tablet} {
    margin-left: auto;
  }
`;

export const Box = styled.div`
  display: flex;
  @media ${device.fabletAndMobileOnly} {
    margin-left: auto;
  } ;
`;

export const BackButton = styled.button`
  display: flex;
  align-items: center;
  border: none;
  background-color: transparent;
`;

export const Text = styled.span`
  display: flex;
  align-items: center;
  font-family: ${({ theme }) => theme.fonts.heading};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: ${({ theme }) => theme.fontSizes.s};
  line-height: ${({ theme }) => theme.lineHeights.nav};
  letter-spacing: ${({ theme }) => theme.letterSpacing.l};
  color: ${({ theme }) => theme.colors.text.secondaryText};
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  margin-left: 16px;
  border: none;
  background-color: transparent;
  font-family: ${({ theme }) => theme.fonts.heading};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: ${({ theme }) => theme.fontSizes.s};
  line-height: ${({ theme }) => theme.lineHeights.nav};
  letter-spacing: ${({ theme }) => theme.letterSpacing.l};
  color: ${({ theme }) => theme.colors.text.primaryText};
  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.accent};
    transition: color ${p => p.theme.animation.cubic};
  }
  @media ${device.desktop} {
    margin-left: 20px;
  }

  &::before {
    content: '';
    height: 32px;
    width: 2px;
    margin-right: 16px;
    background-color: ${({ theme }) => theme.colors.border};
    @media ${device.desktop} {
      margin-right: 20px;
    }
  }
`;
