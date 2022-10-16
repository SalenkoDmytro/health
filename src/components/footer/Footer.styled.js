import styled, { keyframes } from 'styled-components';
import ButtonIcon from 'components/common/buttonIcon';
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

export const FooterStyled = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};

  @media (${device.mobile}) {
    border-top: 2px solid ${({ theme }) => theme.colors.border};
    padding: 20px 20px 16px;
  }

  @media (${device.tabletOnly}) {
    padding: 20px 32px 16px;
  }


  @media (${device.desktop}) {
    align-items: center;
  }

`;

export const FooterTextStyled = styled.p`
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

  text-align: center;
  font-family: ${({ theme }) => theme.fonts.heading};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: ${({ theme }) => theme.fontSizes.s};
  line-height: ${({ theme }) => theme.lineHeights.title};
  letter-spacing: ${({ theme }) => theme.letterSpacing.l};
  text-transform: ${({ theme }) => theme.textTransform.upCase};
  color: ${({ theme }) => theme.colors.text.secondaryText};
`;

export const FooterButtonStyled = styled(ButtonIcon)`
  @media (${device.mobile}) {
    display: none;
  }

  @media (${device.fablet}) {
    display: block;
  }
`;
