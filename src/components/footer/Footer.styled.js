import styled from 'styled-components';
import { device } from 'utils/device';
export const FooterStyled = styled.footer`
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media (${device.mobile}) {
    padding: 20px 20px 16px;
  }

  @media (${device.tabletOnly}) {
    padding: 20px 32px 16px;
  }

  @media (${device.noDesktop}) {
    border-top: 2px solid ${({ theme }) => theme.colors.border};
  }

  @media (${device.desktop}) {
    align-items: baseline;
    padding: 80px 16px;
  }
`;

export const FooterTextStyled = styled.p`
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.heading};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: ${({ theme }) => theme.fontSizes.s};
  line-height: ${({ theme }) => theme.lineHeights.title};
  letter-spacing: ${({ theme }) => theme.letterSpacing.l};
  text-transform: ${({ theme }) => theme.textTransform.upCase};
  color: ${({ theme }) => theme.colors.text.secondaryText};
`;

// export const FooterButtonStyled = styled(Button)`
//   background-color: ${p => p.theme.colors.button.secondaryBackground};
// `;
