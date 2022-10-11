import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  display: flex;
  margin-left: auto;
  @media (max-width: 767px) {
    padding: 4px 20px;

    background-color: ${({ theme }) => theme.colors.primaryBackground};
  } ;
`;

export const Box = styled.div`
  display: flex;
  @media (max-width: 767px) {
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
  @media (min-width: 1200px) {
    margin-left: 20px;
  }

  &::before {
    content: '';
    height: 32px;
    width: 2px;
    margin-right: 16px;
    background-color: ${({ theme }) => theme.colors.border};
    @media (min-width: 1200px) {
      margin-right: 20px;
    }
  }
`;
